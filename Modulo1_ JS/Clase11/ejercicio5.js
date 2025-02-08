const prompt = require('prompt-sync')();

let inicio = parseInt(prompt("Ingresa el número de inicio: "));
let fin = parseInt(prompt("Ingresa el número final: "));

if (inicio > fin) {
  console.log("Valores inválidos. El inicio debe ser menor que el final.");
} else {
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}