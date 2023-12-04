/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let s2 = "|" + s.split("").join("|") + "|";
  let palindromeRadii = Array.from({ length: s2.length }, () => 0);
  let center = 0;
  let radius = 0;

  while (center < s2.length) {
    while (
      center - (radius + 1) >= 0 &&
      center + radius + 1 < s2.length &&
      s2[center - (radius + 1)] === s2[center + radius + 1]
    ) {
      radius += 1;
    }

    palindromeRadii[center] = radius;

    let oldCenter = center;
    let oldRadius = radius;
    center += 1;
    radius = 0;

    while (center <= oldCenter + oldRadius) {
      let mirroredCenter = oldCenter - (center - oldCenter);
      let maxMirroredRadius = oldCenter + oldRadius - center;

      if (palindromeRadii[mirroredCenter] < maxMirroredRadius) {
        palindromeRadii[center] = palindromeRadii[mirroredCenter];
        center += 1;
      } else if (palindromeRadii[mirroredCenter] > maxMirroredRadius) {
        palindromeRadii[center] = maxMirroredRadius;
        center += 1;
      } else {
        radius = maxMirroredRadius;
        break;
      }
    }
  }

  let length = Math.max(...palindromeRadii);
  let index = palindromeRadii.indexOf(length) + 1;

  if (length % 2 === 0) {
    let longestCenter = index / 2;

    return s.slice(longestCenter - length / 2, longestCenter + length / 2);
  } else {
    let longestCenter = (index - 1) / 2;
    let halfLength = (length - 1) / 2;

    return s.slice(longestCenter - halfLength, longestCenter + halfLength + 1);
  }
};

// Followed Manacher's algorithm, which is used to find the length of the longest palindrome, and modified to return the palindrome itself. Runs in linear time O(n).
