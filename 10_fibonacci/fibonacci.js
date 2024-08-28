const fibonacci = function (n) {
  n = parseInt(n, 10);

  if (n === 0) {
    return 0;
  }

  if (n < 0) {
    return "OOPS";
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
