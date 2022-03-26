/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }
  return 0;
};
