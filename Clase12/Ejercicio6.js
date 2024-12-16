const prompt = require('prompt-sync')();

let matriz = [
    [5, 15, 100, 1200],
    [25, 8, 990, 500],
    [12, 200, 5, 1500]
  ];
  
  let suma = 0;
  
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] >= 10 && matriz[i][j] < 1000) {
        suma += matriz[i][j];  // Suma los números dentro del rango
      }
    }
  }
  
  console.log("La suma de los números iguales o mayores a 10 pero menores a 1000 es: " + suma);
  