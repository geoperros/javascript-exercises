const convertToCelsius = function(temp) {
  let value = 0;
  value = (temp - 32) *(5/9);
  value = Math.round(value * 10) / 10;
  return value;
};

const convertToFahrenheit = function(temp) {
  let value = 0;
  value = (temp * (9/5) + 32);
  value = Math.round(value * 10) / 10;
  return value;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
