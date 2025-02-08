const prompt = require('prompt-sync')();

let numeroSecreto = Math.floor(Math.random() * 10) + 1;  
let intentos = 3;

for (let i = 0; i < intentos; i++) {
  let adivinanza = parseInt(prompt("Adivina el número entre 1 y 10: "));
  if (adivinanza === numeroSecreto) {
    console.log("¡Felicidades, adivinaste el número!");
    break;
  } else {
    console.log("Intento incorrecto.");
  }
  if (i === intentos - 1) {
    console.log("El número secreto era: " + numeroSecreto);
  }
}