const prompt = require('prompt-sync')();

let nombre = prompt("¿Cuál es tu nombre? ");
let edad = prompt("¿Cuántos años tienes? ");
let peso = prompt("¿Cuánto pesas (en kg)? ");

console.log("Hola, " + nombre + ". Tienes " + edad + " años y pesas " + peso + " kg.");