const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();

    const deathYear = person.yearOfDeath || currentYear;

    const age = deathYear - person.yearOfBirth;

    if (!oldest || age > oldest.age) {
      return {
        ...person,
        age,
      };
    }

    return oldest;
  }, null);
};
// Do not edit below this line
module.exports = findTheOldest;
