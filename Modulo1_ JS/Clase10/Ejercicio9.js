const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingresa tu peso en kilogramos: "));
let altura = parseFloat(prompt("Ingresa tu altura en metros: "));
let imc = peso / (altura * altura);

console.log("Tu IMC es: " + imc);