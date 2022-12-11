const removeFromArray = function (array, ...args) {
  for (i = 0; i < args.length; i++) {
    index = array.indexOf(args[i]);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
