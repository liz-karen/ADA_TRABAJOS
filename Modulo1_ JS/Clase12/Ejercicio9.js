const prompt = require('prompt-sync')();let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],  // Semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800],  // Semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950]    // Semana 4
  ];
  
  // a) Total de una semana (por ejemplo, semana 2)
  function totalSemana(semana) {
    let total = 0;
    for (let i = 0; i < gastos[semana].length; i++) {
      total += gastos[semana][i];  // Suma los gastos de la semana especificada
    }
    return total;
  }
  
  // b) Total de un día (por ejemplo, día 3)
  function totalDia(dia) {
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
      total += gastos[i][dia];  // Suma los gastos del día especificado
    }
    return total;
  }
  
  // c) Total de todos los gastos en el mes
  function totalMes() {
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
      for (let j = 0; j < gastos[i].length; j++) {
        total += gastos[i][j];  // Suma todos los gastos de la matriz
      }
    }
    return total;
  }
  
  // d) Encontrar la semana con más gastos
  function semanaMasGastos() {
    let maxSemana = 0;
    let maxGastos = 0;
    for (let i = 0; i < gastos.length; i++) {
      let totalSemanaActual = totalSemana(i);
      if (totalSemanaActual > maxGastos) {
        maxGastos = totalSemanaActual;
        maxSemana = i;
      }
    }
    return maxSemana + 1;  // Devuelve la semana (1 a 4)
  }
  
  // e) Encontrar el día con más gastos
  function diaMasGastos() {
    let maxDia = 0;
    let maxGastos = 0;
    for (let i = 0; i < 7; i++) {
      let totalDiaActual = totalDia(i);
      if (totalDiaActual > maxGastos) {
        maxGastos = totalDiaActual;
        maxDia = i;
      }
    }
    return maxDia + 1;  // Devuelve el día (1 a 7)
  }
  
  console.log("Total de la semana 2: " + totalSemana(1));  // Semana 2
  console.log("Total del día 3: " + totalDia(2));  // Día 3
  console.log("Total de todos los gastos en el mes: " + totalMes());
  console.log("Semana con más gastos: " + semanaMasGastos());
  console.log("Día con más gastos: " + diaMasGastos());
  

