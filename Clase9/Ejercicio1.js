const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`${numero2} es mayor que ${numero1}`);
} else {
    console.log("Ambos números son iguales.");
}
