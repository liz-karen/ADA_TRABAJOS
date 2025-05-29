// Este archivo simula una base de datos usando un array
export interface Book {
    id: number;
    title: string;
    author: string;
  }
  
  export const books: Book[] = [
    { id: 1, title: "Si lo crees, lo creas", author: "Brian Tracy" },
    { id: 2, title: "Tus zonas erróneas", author: "Wayner W. Dyer" },
  ];
  