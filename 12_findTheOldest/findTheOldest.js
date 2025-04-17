function findTheOldest(array) {
  return array.reduce((oldest, current) => {
    let currentDate = new Date();
    let ageCurrent;
    let ageOldest;
    if (!oldest.yearOfDeath) {
      ageOldest = currentDate.getFullYear() - oldest.yearOfBirth;
    } else {
      ageOldest = oldest.yearOfDeath - oldest.yearOfBirth;
    }

    if (!current.yearOfDeath) {
      ageCurrent = currentDate.getFullYear() - current.yearOfBirth;
    } else {
      ageCurrent = current.yearOfDeath - current.yearOfBirth;
    }

    if (ageCurrent > ageOldest) {
      return current;
    }  
    else {
      return oldest;
    }
  });
}

// Do not edit below this line
module.exports = findTheOldest;
