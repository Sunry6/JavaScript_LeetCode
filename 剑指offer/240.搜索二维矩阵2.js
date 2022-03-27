/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 二分查找
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  for (item of matrix) {
    let left = 0,
      right = item.length;
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
