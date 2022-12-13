const caesar = function (string, shift) {
  let caesaredChar;
  let caesaredString = "";
  for (i of string) {
    charCode = i.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      if (charCode + shift >= 90) {
        charCode = 65 + (((charCode + shift) % 90) % 26) - 1;
      } else if (charCode + shift <= 65) {
        charCode = 90 - (65 % (charCode + shift)) + 1;
      } else {
        charCode = charCode + shift;
      }
    } else if (charCode >= 97 && charCode <= 122) {
      if (charCode + shift >= 122) {
        charCode = 97 + (((charCode + shift) % 122) % 26) - 1;
      } else if (charCode + shift <= 97) {
        charCode = 122 - (97 % (charCode + shift)) + 1;
      } else {
        charCode = charCode + shift;
      }
    }
    caesaredChar = String.fromCharCode(charCode);
    caesaredString += caesaredChar;
  }
  return caesaredString;
};

// Do not edit below this line
module.exports = caesar;
// if((charCode >= 65 && charCode <= 90)&&((charCode+ +shift <= 65 || charCode + +shift >= 90))
