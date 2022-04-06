/**
 * @param {number} n
 * @return {number}
 */

// 解法一:贪心算法
var cuttingRope = function (n) {
  if (n < 4) return n - 1;
  let result = 1;
  while (n > 4) {
    result *= 3;
    n -= 3;
  }
  return result * n;
};
