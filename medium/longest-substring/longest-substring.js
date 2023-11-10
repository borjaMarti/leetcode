/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hashMap = new Set();
  let curr = "";
  let prev = 0;

  for (let c of s) {
    if (hashMap.has(c)) {
      if (curr.length > prev) {
        prev = curr.length;
      }
      curr = curr.slice(curr.indexOf(c) + 1);
      curr += c;
      hashMap = new Set(curr.split(""));
    } else {
      hashMap.add(c);
      curr += c;
    }
  }

  return Math.max(curr.length, prev);
};

// Similar, simpler, better version:

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//   let curr = "";
//   let prev = 0;

//   for (let c of s) {
//     const i = curr.indexOf(c);
//     if (i > -1) {
//       if (curr.length > prev) {
//         prev = curr.length;
//       }
//       curr = curr.slice(i + 1);
//     }
//     curr += c;
//   }

//   return Math.max(curr.length, prev);
// };
