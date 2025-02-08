const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresa un número: "));

if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}