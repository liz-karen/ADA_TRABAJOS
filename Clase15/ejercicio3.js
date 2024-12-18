const prompt = require('prompt-sync')();

const mascotas = ["Perro", "Gato", "Conejo"];
mascotas.unshift("Hámster"); // Agregar al inicio
const atendido = mascotas.shift(); // Eliminar el primero

console.log(`Mascota atendida: ${atendido}`);
console.log("Fila actualizada:", mascotas);