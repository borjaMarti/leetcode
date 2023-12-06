/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let y = x.toString().split("").reverse().join("");

  if (x.toString()[0] === "-") {
    y = "-" + y.slice(0, y.length - 1);
  }

  let num = Number(y);

  if (num < -2147483648 || num > 2147483647) return 0;

  return num;
};

// Another way of thinking about the 32-bit limit:

if (y <= -Math.pow(2, 31) || y >= Math.pow(2, 31) - 1) {
  return 0;
}
