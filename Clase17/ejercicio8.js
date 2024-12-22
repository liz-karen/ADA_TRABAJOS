const prompt = require('prompt-sync')();

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function busquedaBinaria(array, objetivo) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (array[medio] === objetivo) {
            return medio;
        } else if (array[medio] < objetivo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }
    return -1; // Si no se encuentra
}

const numeros = [1, 5, 6, 9, 11];
numeros.forEach(num => {
    const posicion = busquedaBinaria(lista, num);
    console.log(`La posición de ${num} es: ${posicion}`);
});