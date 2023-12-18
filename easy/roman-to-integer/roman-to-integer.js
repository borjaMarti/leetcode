/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let i = 0;
  let num = 0;

  while (s) {
    if (s.indexOf(romans[i]) === 0) {
      num += values[i];
      s = s.slice(romans[i].length);
    } else {
      i++;
    }
  }

  return num;
};
