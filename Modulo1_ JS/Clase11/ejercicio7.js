const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));
let operacion = prompt("Ingresa la operación (+, -, *, /): ");

switch(operacion) {
  case "+":
    console.log("Resultado: " + (numero1 + numero2));
    break;
  case "-":
    console.log("Resultado: " + (numero1 - numero2));
    break;
  case "*":
    console.log("Resultado: " + (numero1 * numero2));
    break;
  case "/":
    if (numero2 !== 0) {
      console.log("Resultado: " + (numero1 / numero2));
    } else {
      console.log("Error: No se puede dividir entre cero.");
    }
    break;
  default:
    console.log("Operación no válida.");
}