import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/pages/Inicio";
import { Articulos } from "../components/pages/Articulos";
import { Crear } from "../components/pages/Crear";
import { Busqueda } from "../components/pages/Busqueda"; // 1. Aquí importamos el componente
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import { Editar } from "../components/pages/Editar";
import { Articulo } from "../components/pages/Articulo";
export const Rutas = () => {
  // Estado centralizado
  const [articulos, setArticulos] = useState([
    {
      id: 1,
      titulo: "Master en React",
      contenido: "Aprendiendo React desde cero con Vite.",
    },
    {
      id: 2,
      titulo: "Guía de JavaScript",
      contenido: "Repasando los conceptos básicos.",
    },
  ]);

  const editarArticulo = (id, articuloActualizado) => {
    const nuevaLista = articulos.map((articulo) =>
      articulo.id === id ? { ...articulo, ...articuloActualizado } : articulo,
    );
    setArticulos(nuevaLista);
  };

  const borrarArticulo = (id) => {
    let nuevosArticulos = articulos.filter((articulo) => articulo.id !== id);
    setArticulos(nuevosArticulos);
  };

  const agregarArticulo = (nuevoArticulo) => {
    setArticulos([...articulos, nuevoArticulo]);
  };

  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route
            path="/editar/:id"
            element={
              <Editar articulos={articulos} editarArticulo={editarArticulo} />
            }
          />
          <Route
            path="/articulos"
            element={
              <Articulos
                articulos={articulos}
                borrarArticulo={borrarArticulo}
              />
            }
          />

          <Route
            path="/crear-articulo"
            element={<Crear agregarArticulo={agregarArticulo} />}
          />

          <Route
            path="/buscar/:palabra"
            element={
              <Busqueda articulos={articulos} borrarArticulo={borrarArticulo} />
            }
          />

          <Route
            path="*"
            element={
              <div className="jumbo">
                <h1>Error 404</h1>
              </div>
            }
          />
          <Route
            path="/articulo/:id"
            element={<Articulo articulos={articulos} />}
          />
        </Routes>
      </section>

      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};
