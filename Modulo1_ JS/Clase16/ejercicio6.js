const prompt = require('prompt-sync')();

const palabras = ['hola', 'mundo', 'javascript'];
const transformadas = palabras.map(palabra => `¡${palabra}!`);

console.log("Palabras transformadas:", transformadas);