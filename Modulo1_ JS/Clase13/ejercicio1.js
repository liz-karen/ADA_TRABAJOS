const prompt = require('prompt-sync')();

function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2;  
    return area;
  }
  
  
  console.log(calcularAreaTriangulo(10, 5)); 
  
  