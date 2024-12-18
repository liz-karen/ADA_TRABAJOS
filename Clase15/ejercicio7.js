const prompt = require('prompt-sync')();

const comidas = ["Pizza", "Hamburguesa", "Tacos"];
const existe = comidas.includes("Sushi");

console.log(existe ? "Sushi está en la lista." : "Sushi no está en la lista.");