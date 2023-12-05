/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = Array.from({ length: numRows }, () => []);
  let direction = true;
  let row = 0;

  for (let c of s) {
    rows[row].push(c);

    if (direction) {
      if (row + 1 === numRows) {
        direction = false;
        row--;
      } else {
        row++;
      }
    } else {
      if (row === 0) {
        direction = true;
        row++;
      } else {
        row--;
      }
    }
  }

  return rows.reduce((acc, row) => {
    return (acc += row.join(""));
  }, "");
};

// More concise implementation (same logic):

// var convert = function (s, numRows) {
//   if (numRows === 1) return s;
//   const rows = new Array(numRows).fill("");
//   let down = true;
//   let row = 0;

//   for (let i = 0; i < s.length; i++) {
//     rows[row] += s[i];
//     if (down) {
//       rows++;
//     } else {
//       rows--;
//     }
//     if (rows === 0 || rows === numRows - 1) {
//       down = !down;
//     }
//   }

//   return arr.join("");
// };
