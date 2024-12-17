const prompt = require('prompt-sync')();

const convertirCelsiusAFahrenheit = function(celsius) {
    return (celsius * 9 / 5) + 32;
  };
  
  console.log(convertirCelsiusAFahrenheit(0)); 
  console.log(convertirCelsiusAFahrenheit(25)); 