import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("Error detectado:", err.message);
  res.status(500).json({ message: "Ocurrió un error en el servidor" });
};
