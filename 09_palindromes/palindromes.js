const palindromes = function (string) {
  check = true;

  //Remove punctuation or word breaks
  noPunct = string.replace(/[^A-Za-z]/g, "");
  string = noPunct.toLowerCase();
  for (i = 0; i <= string.length / 2; i++) {
    if (!(string[i] === string[string.length - i - 1])) {
      check = false;
    }
  }
  return check;
};

// Do not edit below this line
module.exports = palindromes;
