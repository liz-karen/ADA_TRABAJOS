const prompt = require('prompt-sync')();

const clasificarEdad = (edad) => {
    if (edad <= 12) return "Niño";
    if (edad <= 18) return "Adolescente";
    if (edad <= 59) return "Adulto";
    return "Adulto mayor";
  };
  
  const edad = parseInt(prompt("Ingresa la edad:"));
  console.log(`La clasificación es: ${clasificarEdad(edad)}`);  