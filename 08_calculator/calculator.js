const add = function(x,y) {
  return (x + y);
	
};

const subtract = function(x,y) {
  return (x - y);
	
};

const sum = function(arr) {
  let i = 0;
  let result = 0;
  while (i < arr.length){
    result = result + arr[i]
    i++
  }
  return result;
	
};

const multiply = function(arr) {
  let i = 1;
  let result = arr[0];
  while (i < arr.length){
    result = result * arr[i]
    i++
  }
  return result;

};

const power = function(x,y) {
  return (x ** y);
	
};

const factorial = function(num) {
  let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
