const prompt = require('prompt-sync')();

let horaActual = 14;

function mostrarSaludo() {
  if (horaActual < 12) {
    console.log("Buenos días");
  } else if (horaActual < 18) {
    console.log("Buenas tardes");
  } else {
    console.log("Buenas noches");
  }
}

mostrarSaludo();