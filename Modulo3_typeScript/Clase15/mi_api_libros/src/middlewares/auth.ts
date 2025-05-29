import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  if (token === "123456") {
    next(); // Token válido, sigue con la petición
  } else {
    res.status(401).json({ message: "Token inválido o faltante" });
  }
};
