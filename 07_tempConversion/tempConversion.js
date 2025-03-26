const convertToCelsius = function (fahr) {
  return Math.round((10 * (fahr - 32) * 5) / 9) / 10;
};

const convertToFahrenheit = function (cels) {
return Math.round(((cels*9/5)+32)*10)/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
