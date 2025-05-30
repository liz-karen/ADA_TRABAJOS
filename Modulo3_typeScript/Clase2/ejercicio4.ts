/*Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
titulo (string), autor (string) y paginas (number). La función debe devolver un 
objeto con esas propiedades. Luego, crea dos libros utilizando la función y 
muestra sus detalles en la consola.*/

function crearLibro(title: string, author: string, pages: number): object {
    return {title, author, pages}

}; 

let Silocreeslocreas: object = crearLibro("Si lo crees, lo creas", "Brian Tracy", 290); 
let Tuszonaserróneas: object = crearLibro("Tus zonas erróneas", "Wayner W. Dyer", 225); 
console.log(Silocreeslocreas, Tuszonaserróneas);
