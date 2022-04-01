/**
 * @param {number} n
 * @return {number}
 */

// 解法一:斐波那契dp
var numWays = function (n) {
  if (n === 0 || n === 1 || n === 1000000008) return 1;

  dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
};

// 解法二：匿名函数
var numWays = n => {
  if (n === 0 || n === 1 || n === 1000000008) {
    return 1;
  }

  dp[(1, 1)];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
};
