const prompt = require('prompt-sync')();

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;
let numero = parseFloat(prompt("Ingresa un número:"));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log(`${numero} está dentro del rango de ${RANGO_MINIMO} y ${RANGO_MAXIMO}`);
} else {
    console.log(`${numero} está fuera del rango.`);
}