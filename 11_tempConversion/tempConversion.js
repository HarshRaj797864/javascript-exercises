const convertToCelsius = function (temp) {
  
  let result = 5 / 9 * (((temp * 10) / 10) - 32);
  return Math.round(result * 10) / 10;

};

const convertToFahrenheit = function (temp) {
  let result = (9 / 5 * temp) + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
