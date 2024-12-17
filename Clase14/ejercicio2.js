const prompt = require('prompt-sync')();

const calcularPromedio = (a, b, c, d, e) => (a + b + c + d + e) / 5;

const calif1 = parseFloat(prompt("Calificación 1:"));
const calif2 = parseFloat(prompt("Calificación 2:"));
const calif3 = parseFloat(prompt("Calificación 3:"));
const calif4 = parseFloat(prompt("Calificación 4:"));
const calif5 = parseFloat(prompt("Calificación 5:"));

const promedio = calcularPromedio(calif1, calif2, calif3, calif4, calif5);
console.log(`El promedio es: ${promedio}`);