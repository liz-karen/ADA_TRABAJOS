const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresa un número positivo: "));  // Convertir la entrada en número

for (let i = 1; i <= numero; i++) {  // Usar ciclo for para contar hasta el número ingresado
  console.log(i);
}