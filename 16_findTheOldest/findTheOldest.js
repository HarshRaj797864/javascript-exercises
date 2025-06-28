const findTheOldest = function(arr) {
  if (arr.length === 0) return null; // Handle empty array gracefully

  const currentYear = new Date().getFullYear();

  return arr.reduce((oldest, person) => {
    const getAge = (person) => {
      const deathYear = person.yearOfDeath || currentYear;
      return deathYear - person.yearOfBirth;
    };

    const oldestAge = getAge(oldest);
    const currentAge = getAge(person);

    return currentAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
