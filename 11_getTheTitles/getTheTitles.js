const getTheTitles = function (books) {
  title = [];
  for (i of books) {
    title.push(i.title);
  }
  return title;
};

// Do not edit below this line
module.exports = getTheTitles;
