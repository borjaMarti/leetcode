/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let roman = "";

  if (num > 999) {
    roman += "M".repeat(Math.floor(num / 1000));
    num %= 1000;
  }

  if (num > 899) {
    roman += "CM";
    num -= 900;
  } else if (num > 499) {
    roman += "D";
    num -= 500;
  } else if (num > 399) {
    roman += "CD";
    num -= 400;
  }

  roman += "C".repeat(Math.floor(num / 100));
  num %= 100;

  if (num > 89) {
    roman += "XC";
    num -= 90;
  } else if (num > 49) {
    roman += "L";
    num -= 50;
  } else if (num > 39) {
    roman += "XL";
    num -= 40;
  }

  roman += "X".repeat(Math.floor(num / 10));
  num %= 10;

  if (num > 8) {
    roman += "IX";
    num -= 9;
  } else if (num > 4) {
    roman += "V";
    num -= 5;
  } else if (num > 3) {
    roman += "IV";
    num -= 4;
  }

  roman += "I".repeat(Math.floor(num / 1));

  return roman;
};

// While both solutions are correct, and comparable performance-wise, this implementation would be easier to modify if you ever wanted to add/change symbols:

// var intToRoman = function (num) {
//   const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const symbols = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];

//   let roman = "";
//   let i = 0;

//   while (num > 0) {
//     if (num >= values[i]) {
//       roman += symbols[i];
//       num -= values[i];
//     } else {
//       i++;
//     }
//   }

//   return roman;
// };
