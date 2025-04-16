const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findOldest = findTheOldest(people)

function findTheOldest(array) {
  return  array.reduce((oldest, current) => {
     const ageOldest = oldest.yearOfDeath - oldest.yearOfBirth;
     const ageCurrent = current.yearOfDeath -current.yearOfBirth;
     if ( ageCurrent > ageOldest) {
       return current;
     } else{
       return oldest;
     }
   });
  
 }

// Do not edit below this line
module.exports = findTheOldest;
