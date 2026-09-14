import React from "react";
import { useParams } from "react-router-dom";

export const Busqueda = ({ articulos, borrarArticulo }) => {
  // Extraemos la palabra de la URL
  const { palabra } = useParams();

  // Filtramos el arreglo de artículos buscando coincidencias en título o contenido
  const articulosFiltrados = articulos.filter((articulo) => {
    return (
      articulo.titulo.toLowerCase().includes(palabra.toLowerCase()) ||
      articulo.contenido.toLowerCase().includes(palabra.toLowerCase())
    );
  });

  return (
    <>
      <h2>Resultados para: "{palabra}"</h2>
      {articulosFiltrados.length >= 1 ? (
        articulosFiltrados.map((articulo) => (
          <article key={articulo.id} className="articulo-item">
            <h3>{articulo.titulo}</h3>
            <p>{articulo.contenido}</p>
            <button className="btn" onClick={() => borrarArticulo(articulo.id)}>
              Borrar
            </button>
          </article>
        ))
      ) : (
        <h3>No se encontraron artículos con esa palabra</h3>
      )}
    </>
  );
};
