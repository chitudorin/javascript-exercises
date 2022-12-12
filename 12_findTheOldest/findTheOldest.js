const findTheOldest = function (array) {
  let max = 0;
  let maxAge = 0;
  let age;
  for (person of array) {
    if (!person.yearOfDeath) {
      const d = new Date();
      age = d.getFullYear() - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }
    if (age > maxAge) {
      maxAge = age;
      max = array.indexOf(person);
    }
  }

  return array[max];
};

// Do not edit below this line
module.exports = findTheOldest;
