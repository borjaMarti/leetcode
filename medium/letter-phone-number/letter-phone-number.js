/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const alphabetMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (digits.length === 1) {
    return alphabetMap[digits].split("");
  } else if (!digits) {
    return [];
  }

  let temp = [];
  let result = alphabetMap[digits[0]].split("");

  for (let i = 1; i < digits.length; i++) {
    alphabetMap[digits[i]].split("").forEach((letter) => {
      result.forEach((combo) => {
        temp.push(combo + letter);
      });
    });

    [result, temp] = [temp, []];
  }

  return result;
};

// Recursive solution:

// const letterCombinations = (digits) => {
//   if (digits.length === 0) return [];

//   const alphabetMap = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };
//   const output = [];

//   const backtrack = (combo, next) => {
//     if (next.length === 0) {
//       output.push(combo);
//       return;
//     }
//     const letters = alphabetMap[next[0]];
//     letters
//       .split("")
//       .forEach((letter) => backtrack(combo + letter, next.slice(1)));
//   };

//   backtrack("", digits);

//   return output;
// };
