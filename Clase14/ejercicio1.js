const prompt = require('prompt-sync')();

const calcularPrecioFinal = (precio, iva) => precio + (precio * (iva / 100));

const precio = parseFloat(prompt("Ingresa el precio del producto:"));
const iva = parseFloat(prompt("Ingresa el porcentaje de IVA:"));

const precioFinal = calcularPrecioFinal(precio, iva);
console.log(`El precio final con IVA es: ${precioFinal}`);
