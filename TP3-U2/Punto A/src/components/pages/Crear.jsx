import React, { useState } from "react";
import { useForm } from "../../hooks/useForm"; // 1. Importamos tu nuevo hook

export const Crear = ({ agregarArticulo }) => {
  const [resultado, setResultado] = useState("");

  // 2. Inicializamos el hook
  const { formulario, cambiado } = useForm({});

  const guardarArticulo = (e) => {
    e.preventDefault();

    // 3. Ahora armamos el artículo usando los datos que guardó el hook
    let nuevoArticulo = {
      id: Date.now(),
      titulo: formulario.titulo,
      contenido: formulario.contenido,
    };

    agregarArticulo(nuevoArticulo);
    setResultado("guardado");

    // Vaciamos visualmente los inputs
    e.target.reset();
  };

  return (
    <div className="jumbo">
      <h2>Crear Artículo</h2>
      <p>Añade un nuevo artículo a tu blog simulado</p>

      {resultado === "guardado" && (
        <strong
          style={{ color: "green", display: "block", marginBottom: "15px" }}
        >
          ¡Artículo guardado con éxito!
        </strong>
      )}

      <form className="formulario" onSubmit={guardarArticulo}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="titulo">Título</label>
          {/* 4. Le agregamos el evento onChange al input */}
          <input
            type="text"
            name="titulo"
            id="titulo"
            onChange={cambiado}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="contenido">Contenido</label>
          {/* 4. Le agregamos el evento onChange al textarea */}
          <textarea
            name="contenido"
            id="contenido"
            rows="5"
            onChange={cambiado}
            style={{ width: "100%", padding: "8px" }}
          ></textarea>
        </div>

        <input type="submit" value="Guardar" className="btn" />
      </form>
    </div>
  );
};
