const prompt = require('prompt-sync')();

const verificarOrigen = (marca) => {
    const marcasNacionales = ["Chevrolet", "Ford", "Fiat"];
    return marcasNacionales.includes(marca) ? "Nacional" : "Importado";
  };
  
  const marca = prompt("Ingresa la marca del auto:");
  console.log(`El auto es de origen: ${verificarOrigen(marca)}`);  