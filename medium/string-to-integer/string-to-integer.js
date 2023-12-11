/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let trimmedS = s.trimStart();
  let integer = "";
  let sign = "";

  if (trimmedS[0] === "+" || trimmedS[0] === "-") {
    sign = trimmedS[0];
    trimmedS = trimmedS.slice(1);
  }

  for (let i = 0; i <= trimmedS.length; i++) {
    if (+trimmedS[i] === +trimmedS[i] && trimmedS[i] !== " ") {
      integer += trimmedS[i];
    } else {
      break;
    }
  }

  if (!integer.length) return 0;

  integer = +(sign + integer);

  if (integer > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (integer < -(2 ** 31)) {
    return -(2 ** 31);
  } else {
    return integer;
  }
};

// Two alternative solutions that beat me in simplicity and performance.
// 1 using parseInt function:

// var myAtoi = function (s) {
//   let parsed = parseInt(s);

//   if (isNaN(parsed)) return 0;

//   if (parsed > Math.pow(2, 31) - 1) {
//     return Math.pow(2, 31) - 1;
//   } else if (parsed < Math.pow(2, 31) * -1) {
//     return Math.pow(2, 31) * -1;
//   }

//   return parsed;
// };

// 2 Doing all calculations inside the loop with a flag system, and converting and adding the characters into the integer on the fly.

// var myAtoi = function (str) {
//   let result = 0;
//   let sign = 1;
//   let isNonWhiteSpaceMet = false;
//   let isNumberPhase = false;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char === " ") {
//       if (!isNonWhiteSpaceMet) {
//         continue;
//       } else {
//         break;
//       }
//     }
//     isNonWhiteSpaceMet = true;

//     if (char >= "0" && char <= "9") {
//       isNumberPhase = true;
//       result = result * 10 + (char - "0");
//       continue;
//     }

//     if (char === "+" && !isNumberPhase) {
//       isNumberPhase = true;
//       continue;
//     }

//     if (char === "-" && !isNumberPhase) {
//       isNumberPhase = true;
//       sign *= -1;
//       continue;
//     }

//     break;
//   }
//   result *= sign;
//   return Math.min(Math.max(-(2 ** 31), result), 2 ** 31 - 1);
// };
