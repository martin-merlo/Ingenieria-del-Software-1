import { useEffect } from 'react'

const MensajeConsola = () => {
  useEffect(() => {
    console.log('El componente se ha renderizado')
  }, [])

  return (
    <div>mira la consola para ver el mensaje</div>
  )
}

export default MensajeConsola
