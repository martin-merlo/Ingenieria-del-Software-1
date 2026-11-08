import React from "react";
import { useParams, Link } from "react-router-dom";

export const Articulo = ({ articulos }) => {
  // Capturamos el ID que viene por la URL
  const { id } = useParams();

  // Buscamos el artículo específico en el estado global
  const articuloActual = articulos.find(
    (articulo) => articulo.id === parseInt(id),
  );

  // Si el usuario pone un ID inválido en la URL
  if (!articuloActual) {
    return (
      <div className="jumbo">
        <h1>Error</h1>
        <p>El artículo que buscas no existe.</p>
        <Link to="/articulos" className="btn">
          Volver al listado
        </Link>
      </div>
    );
  }

  return (
    <div className="jumbo">
      {/* Mostramos el detalle completo del artículo */}
      <h1>{articuloActual.titulo}</h1>
      <p style={{ marginTop: "20px", fontSize: "1.2em" }}>
        {articuloActual.contenido}
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link
          to="/articulos"
          className="btn"
          style={{ backgroundColor: "#61dafb", color: "#282c34" }}
        >
          Volver atrás
        </Link>
      </div>
    </div>
  );
};
