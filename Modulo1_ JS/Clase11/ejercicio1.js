const prompt = require("prompt-sync")({sigint: true})

let numero = prompt("Ingresa un número: "); 

if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}