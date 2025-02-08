const prompt = require('prompt-sync')();

let frases = [
    "El clima es malo hoy",
    "Este libro es muy malo",
    "El servicio aquí es malo"
];

function procesarFrases(frases) {
    return frases.map(frase => {
        let palabras = frase.toLowerCase().split(" ");
        let palabrasModificadas = palabras.map(palabra => palabra.replace("malo", "bueno"));
        return palabrasModificadas.join(" ");
    });
}

const frasesProcesadas = procesarFrases(frases);
console.log("Frases modificadas:", frasesProcesadas);