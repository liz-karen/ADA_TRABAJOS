const prompt = require('prompt-sync')();

function transformarYAnalizarNombres(input) {
    const nombres = input.split(",").map(nombre => nombre.trim());

    const existeJuan = nombres.includes("Juan");
    const reemplazados = nombres.map(nombre => nombre === "Maria" ? "Ana" : nombre);
    const indicePedro = reemplazados.indexOf("Pedro");
    const ordenados = reemplazados.sort().join(".");

    return {
        nombres,
        existeJuan,
        reemplazados,
        indicePedro,
        ordenados
    };
}

const nombresInput = "Julian, Maria, Malena, Andrea, Pablo, Pedro";
const resultado = transformarYAnalizarNombres(nombresInput);
console.log("Resultado:", resultado);