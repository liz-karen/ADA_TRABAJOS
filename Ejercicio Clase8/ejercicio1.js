const prompt = require('prompt-sync')();

const numero = parseFloat(prompt("Ingresa un número: "));
const doble = numero * 2;
console.log(`El doble de ${numero} es: ${doble}`);