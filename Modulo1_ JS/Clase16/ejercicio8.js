const prompt = require('prompt-sync')();

const nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
const buscado = 'Laura';

if (nombres.includes(buscado)) {
    console.log(`${buscado} está en la lista.`);
} else {
    console.log(`${buscado} no está en la lista.`);
}