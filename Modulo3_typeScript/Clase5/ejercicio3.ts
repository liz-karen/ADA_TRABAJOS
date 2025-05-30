/*Ejercicio 3: Métodos en Objetos 
1. Modifica el objeto del ejercicio anterior para que incluya un método 
llamado descripcion() que devuelva una descripción del libro. 
2. Llama al método y muestra el resultado en la consola.*/

interface Libro {
    titulo: string;
    autor: string;
    anioPublicacion: number;
    descripcion: () =>void
}


export const libro: Libro = {
    titulo: "Tus zonas erróneas",
    autor: "Wayner W. Dyer",
    anioPublicacion: 1976,
    descripcion: function() {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Anio de publicacion: ${this.anioPublicacion}`;
        
    }
};
const descripcion = libro.descripcion()
console.log(descripcion);

