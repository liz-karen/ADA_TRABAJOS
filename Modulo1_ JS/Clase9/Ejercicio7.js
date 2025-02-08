const prompt = require('prompt-sync')();

let pesoKg = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let pesoLb = pesoKg * 2.20462;

console.log(`Tu peso en libras es: ${pesoLb.toFixed(2)} lbs`);