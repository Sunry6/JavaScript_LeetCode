/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 解法一: DFS+剪枝
var exist = function (board, word) {
  let m = board.length,
    n = board[0].length;
  const dfs = (i, j, index) => {
    // 如果数组越界 或 匹配到的字符与word当前的下标不同,直接返回
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
      return false;
    }
    // 如果长度一样,说明找到了
    if (index === word.length - 1) {
      return true;
    }
    // 置空表示已经查找过了
    board[i][j] = '';
    // 上下左右四个方向遍历
    const res =
      dfs(i + 1, j, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j + 1, index + 1) ||
      dfs(i, j - 1, index + 1);
    // 恢复当前字符
    board[i][j] = word[index];
    return res;
  };

  // 从第一个字符开始dfs
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
