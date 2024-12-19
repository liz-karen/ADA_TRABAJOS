const prompt = require('prompt-sync')();

const palabras = ['sol', 'luna', 'estrella'];
const totalLetras = palabras.reduce((total, palabra) => total + palabra.length, 0);

console.log("Cantidad total de letras:", totalLetras);