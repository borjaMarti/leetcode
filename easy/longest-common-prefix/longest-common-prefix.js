/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longest = strs[0];
  let fail = false;

  for (let str of strs) {
    for (let i = 0; i < longest.length; i++) {
      if (longest[i] === str[i]) {
        continue;
      } else {
        if (i === 0) {
          fail = true;
        }
        longest = longest.slice(0, i);
        break;
      }
    }

    if (fail) return "";
  }

  return longest;
};
