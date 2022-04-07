/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// 解法一:位运算
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count++;
  }
  return count;
};
