const prompt = require('prompt-sync')();

const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(num => num % 2 === 0);

console.log("Números pares:", pares);