import { Request, Response } from "express";
import { books, Book } from "../database";

// Obtener todos los libros o filtrados por autor
export const getBooks = (req: Request, res: Response) => {
  const author = req.query.author as string;
  if (author) {
    const filtered = books.filter(book => book.author === author);
    return res.json(filtered);
  }
  res.json(books);
};

// Obtener un libro por id
export const getBookById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ message: "Libro no encontrado" });
  }
  res.json(book);
};

// Crear un nuevo libro
export const createBook = (req: Request, res: Response) => {
  const { title, author } = req.body;
  const newBook: Book = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

// Actualizar un libro existente
export const updateBook = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: "Libro no encontrado" });

  book.title = title || book.title;
  book.author = author || book.author;
  res.json(book);
};

// Eliminar un libro
export const deleteBook = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: "Libro no encontrado" });

  books.splice(index, 1);
  res.json({ message: "Libro eliminado" });
};
