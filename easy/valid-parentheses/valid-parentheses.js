/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const record = [];

  for (let c of s) {
    switch (c) {
      case "{":
      case "(":
      case "[":
        record.push(c);
        break;
      case "}":
        if (record.pop() !== "{") return false;
        break;
      case ")":
        if (record.pop() !== "(") return false;
        break;
      case "]":
        if (record.pop() !== "[") return false;
        break;
    }
  }

  return !record.length;
};
