const prompt = require('prompt-sync')();

let contraseña;

do {
  contraseña = prompt("Ingresa la contraseña (correcta: 1234): ");
} while (contraseña !== "1234");  

console.log("Contraseña correcta.");