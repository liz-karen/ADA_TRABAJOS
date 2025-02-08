const prompt = require('prompt-sync')();

let numero = prompt("Ingresa un número entero:");

numero = parseInt(numero);

if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}
