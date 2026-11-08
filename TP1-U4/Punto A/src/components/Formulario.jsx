import { useState } from 'react'

const Formulario = () => {
  const [formData, setFormData] = useState({ nombre: '', apellido: '' })

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const manejarSubmit = (evento) => {
    evento.preventDefault()
    console.log(`Nombre: ${formData.nombre}, Apellido: ${formData.apellido}`)
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Escribe tú nombre"
        value={formData.nombre}
        onChange={manejarCambio}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Escribe tú apellido"
        value={formData.apellido}
        onChange={manejarCambio}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario
