// Actividad 6: Gestión de un diario personal
// Consigna: Crea un programa que te permita gestionar un diario
// personal. El programa debe permitirte:
// 1. Agregar una entrada al diario: Registrar una nueva entrada con
// la fecha y el texto.
// 2. Listar las entradas: Mostrar todas las entradas registradas.
// 3. Eliminar una entrada: Eliminar una entrada específica por su ID.
// Pistas:
// • Usa un archivo JSON para guardar las entradas del diario.
// • Cada entrada tendrá una fecha y un texto.
// • Si el archivo no existe, comienza con un arreglo vacío.
const fs = require('fs');
const filePath = './diario.json';

const obtenerEntradasDiario = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contenidoFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenidoFile);
}

const guardarEntradas = (entradas) => {
    fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2));
}

const agregarEntrada = (fecha, texto) => {
    const entradas = obtenerEntradasDiario();
    entradas.push({id: entradas.length + 1, fecha, texto});
    guardarEntradas(entradas);
    console.log("Entrada agregada");
}

const listarEntradas = () => {
    const entradas = obtenerEntradasDiario();
    console.log(entradas);
} 

const eliminarEntrada = (idEntrada) => {
    const entradas = obtenerEntradasDiario();
    let index = entradas.findIndex((entrada) => entrada.id === parseInt(idEntrada));
    if(index != -1 ){
        entradas.splice(index, 1);
        guardarEntradas(entradas);
        console.log("Entrada eliminada");
    } else {
        console.log("La entrada que desea eliminar, no existe");
    }
}

// agregarEntrada("22-01-2025", "Me siento estresada");
// agregarEntrada("22-01-2025", "Quiero tomar vacaciones");
// agregarEntrada("22-01-2025", "No estoy durmiendo bien");
// listarEntradas();
eliminarEntrada(2);