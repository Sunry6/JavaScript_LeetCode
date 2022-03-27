/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 解法一:暴力
// var findNumberIn2DArray = function (matrix, target) {
//   let flag = false;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (matrix[i][j] == target) flag = true;
//     }
//   }
//   return flag;
// };

// 解法二:二分查找
var findNumberIn2DArray = function (matrix, target) {
  for (const item of matrix) {
    let left = 0,
      right = item.length - 1;
    while (left <= right) {
      const mid = Math.floor((right - left) / 2) + left;
      if (item[mid] === target) {
        return true;
      } else if (item[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
};

// 解法三:把这个二维矩阵看出一颗二叉树,从左往右递增,从上往下递增
// 当前数字大于目标值,往上移一位
// 当前数字小于目标值,往右移一位
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false;
  let x = matrix.length - 1,
    y = 0;
  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) {
      return true;
    } else if (matrix[x][y] > target) {
      x--;
    } else {
      y++;
    }
  }
  return false;
};
