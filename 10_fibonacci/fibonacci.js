const fibonacci = function (nth) {
  if (nth < 0) {
    return "OOPS";
  } else {
    let first = 0;
    let second = 1;
    let middleMan;
    for (i = 0; i <= nth - 2; i++) {
      middleMan = second;
      second = first + second;
      first = middleMan;
    }
    return second;
  }
};

// Do not edit below this line
module.exports = fibonacci;
