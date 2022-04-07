/**
 * @param {number} n
 * @return {number}
 */

// 解法一:贪心算法
var cuttingRope = function (n) {
  if (n < 4) return n - 1;
  let res = 1;
  while (n > 4) {
    res = (res * 3) % 1000000007;
    n -= 3;
  }

  return (res * n) % 1000000007;
};

var cuttingRope = n => {
  // 特殊情况处理
  const arr = [null, null, 1, 2, 4];
  if (n <= 4) return arr[n];
  const mod = 1000000007;
  let res = 1;
  while (n > 4) {
    // 每次减3
    res = (res * 3) % mod;
    n -= 3;
  }
  res *= n;
  return res % mod;
};
