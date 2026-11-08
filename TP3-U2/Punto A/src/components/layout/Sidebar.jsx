import React from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navegar = useNavigate();

  const hacerBusqueda = (e) => {
    e.preventDefault();
    // Capturamos la palabra ingresada en el input
    let palabra = e.target.search_field.value;

    // Si escribió algo, lo redirigimos a la ruta de búsqueda
    if (palabra.length >= 1) {
      navegar("/buscar/" + palabra);
    }

    // Limpiamos el buscador
    e.target.reset();
  };

  return (
    <aside className="sidebar">
      <div className="search">
        <h3>Buscador</h3>
        <form onSubmit={hacerBusqueda}>
          <input
            type="text"
            name="search_field"
            placeholder="Buscar artículo..."
          />
          <button className="btn">Buscar</button>
        </form>
      </div>
    </aside>
  );
};
