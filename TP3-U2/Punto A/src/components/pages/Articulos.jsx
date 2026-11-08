import React from "react";
import { Link } from "react-router-dom";

export const Articulos = ({ articulos, borrarArticulo }) => {
  return (
    <>
      <h2>Listado de Artículos</h2>
      {articulos.length >= 1 ? (
        articulos.map((articulo) => (
          <article key={articulo.id} className="articulo-item">
            {/* Título convertido en enlace hacia Articulo.jsx */}
            <h3>
              <Link
                to={"/articulo/" + articulo.id}
                style={{ textDecoration: "none", color: "#333" }}
              >
                {articulo.titulo}
              </Link>
            </h3>

            <p>{articulo.contenido}</p>

            {/* Botones de acción */}
            <Link
              to={"/editar/" + articulo.id}
              className="btn"
              style={{ backgroundColor: "#f39c12", marginRight: "10px" }}
            >
              Editar
            </Link>
            <button className="btn" onClick={() => borrarArticulo(articulo.id)}>
              Borrar
            </button>
          </article>
        ))
      ) : (
        <h3>No hay artículos para mostrar</h3>
      )}
    </>
  );
};
