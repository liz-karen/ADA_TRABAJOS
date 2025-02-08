const prompt = require('prompt-sync')();

const libro1 = { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anioPublicacion: 1967 };
const libro2 = { titulo: "Don Quijote", autor: "Miguel de Cervantes", anioPublicacion: 1605 };

const mostrarLibro = (libros) => {
  libros.forEach((libro) => {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anioPublicacion}`);
  });
};

mostrarLibro([libro1, libro2]);