/**
 * @param {number[]} nums
 * @return {number}
 */

// 解法一:二分查找
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) >> 1) + low;
    if (nums[mid] > nums[high]) {
      // 最小值在右边
      low = mid + 1;
    } else if (nums[mid] < nums[high]) {
      // 最小值在左边或者mid就是最小值
      high = mid;
    } else {
      // 最小值有重复的
      high--;
    }
  }
  return nums[low];
};
