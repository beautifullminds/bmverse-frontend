/** GitHub Pages supports static files only; deploy API separately. */
const isPages = process.env.GITHUB_PAGES === 'true';
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isPages ? { basePath: '/bmverse-frontend', assetPrefix: '/bmverse-frontend/' } : {})
};
export default nextConfig;
