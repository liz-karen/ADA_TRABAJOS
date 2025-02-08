const prompt = require('prompt-sync')();

const numeros = [5, 8, 12, 20, 3];
const mayorA10 = numeros.find(num => num > 10);

console.log("Primer número mayor a 10:", mayorA10);