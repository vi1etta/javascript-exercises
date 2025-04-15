const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => {
    return sum + current;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((multiplied, current) => {
    return Number(multiplied * current);
  }, 1);
};
const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let result = 1;

  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
};



module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
