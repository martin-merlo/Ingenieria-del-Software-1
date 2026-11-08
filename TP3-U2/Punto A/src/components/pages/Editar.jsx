import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const Editar = ({ articulos, editarArticulo }) => {
  // Capturamos el ID de la URL
  const { id } = useParams();
  const [resultado, setResultado] = useState("");

  // Buscamos el artículo original para rellenar los datos
  const articuloAEditar = articulos.find(
    (articulo) => articulo.id === parseInt(id),
  );

  // Inicializamos tu custom hook con los datos del artículo existente
  const { formulario, cambiado } = useForm({
    titulo: articuloAEditar ? articuloAEditar.titulo : "",
    contenido: articuloAEditar ? articuloAEditar.contenido : "",
  });

  const guardarEdicion = (e) => {
    e.preventDefault();

    let articuloActualizado = {
      titulo: formulario.titulo,
      contenido: formulario.contenido,
    };

    // Usamos la función del padre pasándole el ID original y los nuevos datos
    editarArticulo(parseInt(id), articuloActualizado);
    setResultado("guardado");
  };

  // Si alguien pone un ID en la URL que no existe
  if (!articuloAEditar) return <h3>Artículo no encontrado</h3>;

  return (
    <div className="jumbo">
      <h2>Editar Artículo</h2>
      <p>Modificando: {articuloAEditar.titulo}</p>

      {resultado === "guardado" && (
        <strong
          style={{ color: "green", display: "block", marginBottom: "15px" }}
        >
          ¡Artículo editado con éxito!
        </strong>
      )}

      <form className="formulario" onSubmit={guardarEdicion}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            defaultValue={formulario.titulo}
            onChange={cambiado}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="contenido">Contenido</label>
          <textarea
            name="contenido"
            id="contenido"
            rows="5"
            defaultValue={formulario.contenido}
            onChange={cambiado}
            style={{ width: "100%", padding: "8px" }}
          ></textarea>
        </div>

        <input type="submit" value="Guardar cambios" className="btn" />
      </form>
    </div>
  );
};
