/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let length = 0;
  let y = x;

  while (y >= 1) {
    length++;
    y = y / 10;
  }

  const digits = [];

  for (let i = 0; i < length; i++) {
    digits.push(x % 10);
    x = (x - (x % 10)) / 10;
  }

  let left = 0;
  let right = digits.length - 1;

  while (left <= right) {
    if (digits[left] !== digits[right]) return false;
    left++;
    right--;
  }

  return true;
};

// So that was my attempt at not "converting the integer into a string", which goes on a roundabout way to keep using numbers. If converting to a string, I could have skipped to the last while loop directly, and not used an array, like this:

// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   let string = x.toString();
//   let left = 0;
//   let right = string.length - 1;

//   while (left <= right) {
//     if (string[left] !== string[right]) return false;
//     left++;
//     right--;
//   }

//   return true;
// };

// Here is a better implementation using only numbers:

// var isPalindrome = function (x) {
//   let y = x;
//   let reverse = 0;

//   while (y > 0) {
//     const mod = y % 10;
//     reverse = reverse * 10 + mod;
//     y = Math.floor(y / 10);
//   }

//   return reverse === x;
// };
