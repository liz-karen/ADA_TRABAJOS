const prompt = require('prompt-sync')();

const numeros = [2, 4, 6, 8];
const cuadrados = numeros.map(num => num ** 2);

console.log("Lista de cuadrados:", cuadrados);