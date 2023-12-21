/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = Infinity;
  nums = nums.sort((a, b) => a - b);
  let max =
    nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3];
  let min = nums[0] + nums[1] + nums[2];
  if (target >= max) return max;
  if (target <= min) return min;

  for (let i = 0; i < nums.length - 2; i++) {
    // skip repeat numbers
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // `low` represents the "middle" element between `i` and `high`.
    // we will increment this up through the array while `i` and `high`
    // are anchored to their positions. we will decrement `high` for
    // for each pass through the array, and finally increment `i`
    // once `low` and `high` meet.
    let low = i + 1;

    // `high` represents the "right" most element
    let high = nums.length - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      if (Math.abs(target - sum) < Math.abs(target - result)) result = sum;

      // if we find the target sum, return
      if (sum === target) {
        return target;
      } else if (sum < target) {
        low++;
        // if the sum is too large, decrement `high`
      } else {
        high--;
      }
    }
  }

  return result;
};
