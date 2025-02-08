const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresa un número: "));

for (let i = 1; i <= 100; i++) {
  if (i % numero === 0) {
    console.log(i);
  }
}