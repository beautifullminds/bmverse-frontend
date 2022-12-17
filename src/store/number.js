const { BigNumber } = require("bignumber.js");

export const toFixed = function (
  big,
  scale = 8,
  roundMode = undefined,
  options = { maxScale: 18 }
) {
  if (big === undefined || big === null) return "";
  const b = new BigNumber(big);
  if (b.isNaN()) {
    return "";
  }
  const { maxScale } = options;
  const resultScale = Math.min(scale, maxScale);
  return b.toFixed(resultScale, roundMode);
};
