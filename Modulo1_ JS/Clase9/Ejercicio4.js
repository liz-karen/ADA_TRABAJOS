const prompt = require('prompt-sync')();

let miNombre = "Liz Karen";
let nombre = prompt("Ingresa tu nombre:");

if (nombre === miNombre) {
    console.log("¡Hola, tocaya!");
} else {
    console.log(`Hola, ${nombre}. Tu nombre es diferente al mío.`);
}