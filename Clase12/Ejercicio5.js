const prompt = require('prompt-sync')();

let nombres = [];  

for (let i = 0; i < 5; i++) {
  let nombre = prompt("Ingresa el nombre del estudiante " + (i + 1) + ": ");
  nombres.push(nombre);  
}

let nombreABuscar = prompt("Ingresa un nombre para buscar: ");

if (nombres.includes(nombreABuscar)) {  
  console.log("El nombre " + nombreABuscar + " está en la lista.");
} else {
  console.log("El nombre " + nombreABuscar + " no está en la lista.");
}