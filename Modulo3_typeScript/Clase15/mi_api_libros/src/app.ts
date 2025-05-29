import express from "express";
import cors from "cors";
import booksRoutes from "./routes/books";
import { authMiddleware } from "./middlewares/auth";
import { errorHandler } from "./middlewares/error";

const app = express();
const PORT = 3000;

// Middleware para imprimir en consola cuando se recibe una solicitud
app.use((req, _res, next) => {
  console.log("Middleware global: se recibió una solicitud a", req.url);
  next();
});

// Middleware de terceros para permitir CORS
app.use(cors());

// Middleware de Express para manejar JSON en el cuerpo de la solicitud
app.use(express.json());

// Middleware personalizado para verificar token
app.use(authMiddleware);

// Rutas principales de libros
app.use(booksRoutes);

// Middleware global de manejo de errores
app.use(errorHandler);

// Servidor escuchando en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
