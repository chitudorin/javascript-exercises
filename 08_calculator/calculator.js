const add = function (a, b) {
  return +a + +b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.length) {
    var sumOfNumbers = 0;
    for (i in array) {
      sumOfNumbers = +sumOfNumbers + +array[i];
    }
    return sumOfNumbers;
  } else {
    return 0;
  }
};

const multiply = function (array) {
  if (array.length) {
    var result = 1;
    for (i in array) {
      result = result * +array[i];
    }
    return result;
  } else {
    return 0;
  }
};

const power = function (number, power) {
  result = 1;
  for (i = 1; i <= power; i++) {
    result = result * number;
  }
  return result;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  } else {
    result = 1;
    for (i = 1; i <= number; i++) {
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
