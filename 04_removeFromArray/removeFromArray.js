const removeFromArray = function (arrayValues, ...valueToDelete) {
  return arrayValues.filter((value) => !valueToDelete.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;

