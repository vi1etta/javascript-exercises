const fibonacci = function (n) {
  let value = Number(n);
  if (value === 1 || value === 2) return 1;
  if (value === 0) return 0;
  if (value < 0) return "OOPS";

  // first variant for solution: return fibonacci(value - 1) + fibonacci(value - 2);

  //secon solution:

  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= value; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
