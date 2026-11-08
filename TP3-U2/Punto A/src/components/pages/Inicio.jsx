import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="jumbo">
      <h2>Bienvenido a mi Blog</h2>
      <p>Este es el proyecto desarrollado en React.</p>
      <Link to="/articulos" className="btn">
        Ver artículos
      </Link>
    </div>
  );
};
