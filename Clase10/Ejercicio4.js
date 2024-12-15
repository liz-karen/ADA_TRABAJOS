const prompt = require('prompt-sync')();

let verdadero = true;           // Variable booleana
let texto = "Hola, soy estudiante."; // Variable de tipo string
let numero = 22;               // Variable numérica
let nada = null;               // Variable nula

// Operaciones y validaciones:
let suma = numero + 8;       // Suma con el número
let mensaje = texto + " " + "Estoy aprendiendo JavaScript.";  // Concatenación de cadenas

if (verdadero) {
    console.log("La variable es verdadera.");
} else {
    console.log("La variable es falsa.");
}

if (nada === null) {
    console.log("La variable 'nada' es nula.");
}

console.log("Suma: " + suma);
console.log(mensaje);