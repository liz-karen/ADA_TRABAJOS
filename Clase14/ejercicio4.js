const prompt = require('prompt-sync')();

const calcularTotal = (cantidad, precio) => {
    let total = cantidad * precio;
    if (cantidad > 10) total *= 0.9; 
    else if (cantidad > 5) total *= 0.95; 
    return total;
  };
  
  const cantidad = parseInt(prompt("Cantidad de productos:"));
  const precioUnitario = parseFloat(prompt("Precio unitario:"));
  console.log(`El total con descuento es: ${calcularTotal(cantidad, precioUnitario)}`);  