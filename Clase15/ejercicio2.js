const prompt = require('prompt-sync')();

const invitados = ["Ana", "Juan", "Carlos", "Sofía"];
const eliminado = invitados.pop();

console.log(`Invitado eliminado: ${eliminado}`);
console.log("Lista actualizada:", invitados);
