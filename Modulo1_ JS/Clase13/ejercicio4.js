const prompt = require('prompt-sync')();

function esPar(numero) {
    let resultado = (numero % 2 === 0) ? "Es par" : "Es impar";
    return resultado;
  }
  
  console.log(esPar(4));
  console.log(esPar(7)); 
  