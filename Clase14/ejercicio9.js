const prompt = require('prompt-sync')();

const modelosAutos = ["Toyota", "Ford", "Chevrolet", "Ford", "Nissan"];

const ultimaAparicionModeloAuto = (modelo) => {
  let posicion = -1;
  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i] === modelo) posicion = i + 1;
  }
  return posicion !== -1
    ? console.log(`El modelo aparece en la posición: ${posicion}`)
    : console.log("Modelo no encontrado");
};

ultimaAparicionModeloAuto("Ford");