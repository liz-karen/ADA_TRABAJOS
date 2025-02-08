const prompt = require('prompt-sync')();

let numero1 = 15;
let numero2 = 20;

if (numero1 > 10 && numero2 > 10) {
    console.log("Ambos números son mayores que 10.");
} else {
    console.log("Al menos uno de los números no es mayor que 10.");
}