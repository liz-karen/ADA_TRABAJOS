const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} es el mayor.`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} es el mayor.`);
} else {
    console.log(`${num3} es el mayor.`);
}
