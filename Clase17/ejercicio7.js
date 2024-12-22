const prompt = require('prompt-sync')();

let flores = "Rosa, Tulipán, Orquídea, Lirio";

function gestionarFloreria(entrada) {
    let listaFlores = entrada.split(",").map(flor => flor.trim());
    if (listaFlores.includes("Margarita")) listaFlores.push("Azucena");

    listaFlores = listaFlores.map(flor => (flor === "Orquídea" ? "Clavel" : flor));

    if (!listaFlores.includes("Girasol")) listaFlores.unshift("Girasol");

    const floresOrdenadas = listaFlores.sort().join(".");
    return floresOrdenadas;
}

const resultado = gestionarFloreria(flores);
console.log("Flores ordenadas:", resultado);