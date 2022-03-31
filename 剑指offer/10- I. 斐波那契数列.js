/**
 * @param {number} n
 * @return {number}
 */

// 解法一:遍历
var fib = function (n) {
  if (n === 0) return 0;
  else if (n === 1 || n === 2) return 1;

  let pre = 1,
    next = 1,
    ret = 0;

  for (let i = 2; i <= n; i++) {
    pre = next;
    next = ret;
    ret = (pre + next) % 1000000007;
  }

  return ret;
};

// 解法二:dp
var fib = function (n) {
  dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
};
