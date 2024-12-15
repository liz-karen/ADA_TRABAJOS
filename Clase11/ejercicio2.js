const prompt = require('prompt-sync')();

let color = prompt("Ingresa el color del semáforo (rojo, amarillo, verde): ");

switch(color.toLowerCase()) {
  case "rojo":
    console.log("Alto, no puedes avanzar.");
    break;
  case "amarillo":
    console.log("Precaución, prepárate para avanzar.");
    break;
  case "verde":
    console.log("Avanza con seguridad.");
    break;
  default:
    console.log("Color no reconocido, ingresa rojo, amarillo o verde.");

}