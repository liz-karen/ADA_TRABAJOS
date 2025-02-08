const prompt = require('prompt-sync')();

let suma = 0;  

while (true) {
  let numero = parseInt(prompt("Ingresa un número (ingresa un número negativo para salir): "));
  
  if (numero < 0) {
    break; 
  }
  
  suma += numero; 
}

console.log("La suma de todos los números ingresados es: " + suma);