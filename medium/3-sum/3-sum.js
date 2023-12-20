/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const results = [];
  if (nums.length < 3) return results;
  nums = nums.sort((a, b) => a - b);
  if (nums[0] > 0) return results;
  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    // `i` represents the "left" most number in our sorted set.
    // once this number hits our target (0), there's no need to go further
    if (nums[i] > target) break;

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

      // if we find the target sum, increment `low` and decrement `high` for
      // other potential combos where `i` is the anchor
      if (sum === target) {
        // store the valid threesum
        results.push([nums[i], nums[low], nums[high]]);

        // we increment `low` and decrement `high` as long as those values are
        // duplicated.
        while (nums[low] === nums[low + 1]) low++;
        while (nums[high] === nums[high - 1]) high--;

        // finally, we need to actually move `low` forwards and `high` backwards
        // to the next unique elements.
        low++;
        high--;

        // if the sum is too small, increment `low`
      } else if (sum < target) {
        low++;

        // if the sum is too large, decrement `high`
      } else {
        high--;
      }
    }
  }

  return results;
}

// My original attempt. It compeltes 227 out of 312 testcases. The inputs are too large to debug. The idea is to keep track of which triplets have been used by having a Set with a string representing the ordered triplet.

// var threeSum = function (nums) {
//   const peers = [];
//   const triplets = [];
//   const pairs = new Map();
//   const repeats = new Set();

//   for (let num of nums) {
//     let prospects = pairs.get(0 - num);

//     if (prospects) {
//       for (let prospect of prospects) {
//         let sortedProspect = [...prospect, num].sort().join("");
//         if (!repeats.has(sortedProspect)) {
//           triplets.push([...prospect, num]);
//           repeats.add(sortedProspect);
//         }
//       }
//     }

//     for (let peer of peers) {
//       let presentPairs = pairs.get(num + peer);

//       if (presentPairs) {
//         pairs.set(num + peer, [...presentPairs, [num, peer]]);
//       } else {
//         pairs.set(num + peer, [[num, peer]]);
//       }
//     }

//     peers.push(num);
//   }

//   return triplets;
// };
