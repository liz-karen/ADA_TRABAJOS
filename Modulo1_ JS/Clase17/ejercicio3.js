const prompt = require('prompt-sync')();

const productos = [
    { nombre: "Manzana", precio: 30 },
    { nombre: "Banana", precio: 20 },
    { nombre: "Pera", precio: 40 }
];

function gestionarProductos(lista) {
    lista.push({ nombre: "Uva", precio: 60 }); 
    lista.pop(); 

    const indicePera = lista.findIndex(producto => producto.nombre === "Pera");
    const existeMayor50 = lista.some(producto => producto.precio > 50);
    const nombresProductos = lista.map(producto => producto.nombre).join(", ");

    return {
        lista,
        indicePera,
        existeMayor50,
        nombresProductos
    };
}

const resultado = gestionarProductos(productos);
console.log("Resultado:", resultado);
