const prompt = require('prompt-sync')();

const floresFavoritas = [];
floresFavoritas[0] = prompt("Primera flor favorita:");
floresFavoritas[1] = prompt("Segunda flor favorita:");
floresFavoritas[2] = prompt("Tercera flor favorita:");

const florBuscar = prompt("Ingresa una flor a buscar:");
const coincidencias = floresFavoritas.filter((flor) => flor === florBuscar).length;

console.log(`La flor "${florBuscar}" se mencionó ${coincidencias} veces.`);