const prompt = require('prompt-sync')();

const calcularFactorial = function(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  };
  
  console.log(calcularFactorial(5));   