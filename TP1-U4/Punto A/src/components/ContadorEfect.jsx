import { useEffect, useState } from 'react'

const ContadorEfect = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log(`El contador es: ${contador}`)
  }, [contador])

  return (
    <div>
      <p>has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 2)}>Incrementar</button>
    </div>
  )
}

export default ContadorEfect
