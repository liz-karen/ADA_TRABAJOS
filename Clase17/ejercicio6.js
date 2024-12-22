const prompt = require('prompt-sync')();

let autos = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(entrada) {
    let marcas = entrada.split(",").map(marca => marca.trim());
    const existeTesla = marcas.includes("Tesla");
    marcas = marcas.map(marca => (marca === "Ford" ? "BMW" : marca));
    const indiceChevrolet = marcas.indexOf("Chevrolet");
    const marcasOrdenadas = marcas.sort().join(".");

    return { marcas, existeTesla, indiceChevrolet, marcasOrdenadas };
}

const resultado = gestionarAutos(autos);
console.log("Resultado:", resultado);