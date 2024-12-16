const prompt = require('prompt-sync')();

let X = parseInt(prompt("Ingresa un número X: "));
let contadorImpares = 0;

for (let i = 0; i <= X; i++) {
  if (i % 2 !== 0) {  
    contadorImpares++;  
  }
}

console.log("La cantidad de números impares desde 0 hasta " + X + " (inclusive) es: " + contadorImpares);