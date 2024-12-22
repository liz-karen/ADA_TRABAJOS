const prompt = require('prompt-sync')();

function procesarOracion(oracion) {
    const sinEspacios = oracion.trim();
    const palabras = sinEspacios.split(" ");
    const reemplazo = sinEspacios.replace(/a/g, "@");
    const posicionJavaScript = sinEspacios.toLowerCase().indexOf("javascript");
    const palabrasGuiones = palabras.join("-");

    return {
        sinEspacios,
        palabras,
        reemplazo,
        posicionJavaScript,
        palabrasGuiones
    };
}

const oracion = "  JavaScript es asombroso  ";
const resultado = procesarOracion(oracion);
console.log("Resultado:", resultado);