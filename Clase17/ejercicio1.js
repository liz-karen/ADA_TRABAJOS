const prompt = require('prompt-sync')();

const estudiante = {
    nombre: "Carlos",
    edad: 20,
    notas: [8, 7, 9, 10, 6]
};

function procesarEstudiante(est) {
    est.notas.push(8); 
    est.notas.shift(); 

    const promedio = est.notas.reduce((suma, nota) => suma + nota, 0) / est.notas.length;
    const nombreMayusculas = est.nombre.toUpperCase();

    return { nombre: nombreMayusculas, promedio };
}

const resultado = procesarEstudiante(estudiante);
console.log("Resultado:", resultado);