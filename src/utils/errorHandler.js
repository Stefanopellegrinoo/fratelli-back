// src/utils/errorHandler.js
export function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(400).json({ error: err.message || "Error en el servidor." });
  }
  