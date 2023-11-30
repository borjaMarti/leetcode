/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const small = nums1.length > nums2.length ? nums2 : nums1;
  const big = nums1.length > nums2.length ? nums1 : nums2;
  const x = small.length;
  const y = big.length;
  let low = 0;
  let high = x;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((x + y + 1) / 2 - partitionX);

    const maxLeftX = partitionX === 0 ? -Infinity : small[partitionX - 1];
    const minRightX = partitionX === x ? Infinity : small[partitionX];

    const maxLeftY = partitionY === 0 ? -Infinity : big[partitionY - 1];
    const minRightY = partitionY === y ? Infinity : big[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};

// O(log(n+m)) solution.
// Other possible solutions: Merge then sort. Merge sort.
