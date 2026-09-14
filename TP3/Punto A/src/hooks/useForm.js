import { useState } from "react";

export const useForm = (objetoInicial = {}) => {
  // Estado que guardará los datos del formulario
  const [formulario, setFormulario] = useState(objetoInicial);

  // Función que se ejecuta cada vez que el usuario escribe algo
  const cambiado = ({ target }) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return {
    formulario,
    cambiado,
  };
};
