const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}