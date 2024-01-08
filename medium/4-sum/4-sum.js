/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const results = [];
  const quad = [];
  nums = nums.sort((a, b) => a - b);

  const kSum = (k, start, target) => {
    if (k !== 2) {
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        quad.push(nums[i]);
        kSum(k - 1, i + 1, target - nums[i]);
        quad.pop();
      }

      return;
    }
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] < target) {
        left++;
      } else if (nums[left] + nums[right] > target) {
        right--;
      } else {
        results.push([...quad, nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  };

  kSum(4, 0, target);

  return results;
};
