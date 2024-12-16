const prompt = require('prompt-sync')();

let matriz = [
    [505, 10, 20, 30, 40],
    [50, 505, 60, 70, 80],
    [90, 100, 505, 110, 120],
    [130, 140, 150, 505, 160],
    [170, 180, 190, 200, 505]
  ];
  
  // Función para sumar la diagonal roja (diagonal principal)
  function sumaRojo() {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][i];  // Suma los valores de la diagonal principal
    }
    return suma;
  }
  
  // Función para sumar la diagonal verde (diagonal inversa)
  function sumaVerde() {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][matriz.length - 1 - i];  // Suma los valores de la diagonal inversa
    }
    return suma;
  }
  
  console.log("Suma de la diagonal roja: " + sumaRojo());   // 505 + 505 + 505 + 505 + 505 = 2525
  console.log("Suma de la diagonal verde: " + sumaVerde()); // 505 + 140 + 100 + 70 + 40 = 855
  