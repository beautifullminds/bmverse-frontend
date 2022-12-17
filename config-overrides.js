// config-overrides.js
const { ProvidePlugin } = require("webpack");

module.exports = function (config, env) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.m?[jt]sx?$/,
          enforce: "pre",
          use: ["source-map-loader"]
        },
        {
          test: /\.m?[jt]sx?$/,
          resolve: {
            fullySpecified: false
          }
        }
      ]
    },
    plugins: [
      ...config.plugins,
      new ProvidePlugin({
        process: "process/browser"
      })
    ],
    resolve: {
      ...config.resolve,
      fallback: {
        assert: require.resolve("assert"),
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        path: require.resolve("path-browserify"),
        os: false,
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify")
      }
    },
    ignoreWarnings: [/Failed to parse source map/]
  };
};
