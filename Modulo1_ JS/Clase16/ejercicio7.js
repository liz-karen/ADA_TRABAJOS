const prompt = require('prompt-sync')();

const nombres = ['Ana', 'Luis', 'Andrea', 'María'];
const nombresConA = nombres.filter(nombre => nombre.startsWith('A'));

console.log("Nombres que empiezan con 'A':", nombresConA);