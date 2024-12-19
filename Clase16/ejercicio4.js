const prompt = require('prompt-sync')();

const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((total, num) => total + num, 0);

console.log("Suma total:", suma);