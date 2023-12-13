/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (string, pattern) {
  // if pattern is empty, return
  if (!pattern) {
    // if string is also empty, return is true
    return !string;
  }

  // check if first character of string & pattern matches, IF string has characters
  const hasFirstCharMatch =
    Boolean(string) && (pattern[0] === "." || pattern[0] === string[0]);

  // check if next character in line will be "*"
  if (pattern[1] === "*") {
    // isMatch(string, pattern.slice(2)): if character in pattern after
    // "*" matches current string character, try to skip ahead
    // hasFirstCharMatch: check whether current character matches (otherwise return false) to initiate...
    // ...isMatch(string.slice(1), pattern): advance string, stay with pattern
    return (
      isMatch(string, pattern.slice(2)) ||
      (hasFirstCharMatch && isMatch(string.slice(1), pattern))
    );
  }

  // hasFirstCharMatch: if they don't, we return false
  // isMatch(string.slice(1), pattern.slice(1)): else, we procceed with the next characters
  return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};

// Tried to solve by using loops but it wasn't possible. Found this recursive solution which I liked, but it isn't optimized.

// Optimal solution using dynamic programming:

// var isMatch = function (s, p) {
//   const m = s.length,
//     n = p.length;
//   const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(false));
//   dp[0][0] = true; // empty pattern matches empty string

//   // initialize first row (empty string)
//   for (let j = 1; j <= n; j++) {
//     if (p[j - 1] === "*") dp[0][j] = dp[0][j - 2];
//   }

//   // fill in remaining cells
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else if (p[j - 1] === "*") {
//         dp[i][j] = dp[i][j - 2]; // zero occurrences
//         if (s[i - 1] === p[j - 2] || p[j - 2] === ".") {
//           dp[i][j] = dp[i][j] || dp[i - 1][j]; // one or more occurrences
//         }
//       }
//     }
//   }
//   return dp[m][n];
// };
