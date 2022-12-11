const add = function (a, b) {
  return +a + +b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.length) {
    var sumOfNumbers = 0;
  } else {
    return 0;
  }
  for (i in array) {
    sumOfNumbers = +sumOfNumbers + +array[i];
  }
  return sumOfNumbers;
};

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
