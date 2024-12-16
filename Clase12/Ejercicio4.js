const prompt = require('prompt-sync')();

let notas = [];  
let cantidadEstudiantes = parseInt(prompt("¿Cuántos estudiantes quieres ingresar?"));

for (let i = 0; i < cantidadEstudiantes; i++) {
  let nota = parseFloat(prompt("Ingresa la nota del estudiante " + (i + 1) + ": "));
  notas.push(nota);  
}

console.log("Las notas ingresadas son: " + notas);
