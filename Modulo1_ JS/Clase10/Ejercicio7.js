const prompt = require('prompt-sync')();

let a = 5;
let b = 10;

console.log("Antes del intercambio: a = " + a + ", b = " + b);

let temp = a;
a = b;
b = temp;

console.log("Después del intercambio: a = " + a + ", b = " + b);