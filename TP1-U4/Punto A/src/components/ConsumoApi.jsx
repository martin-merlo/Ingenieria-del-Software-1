import { useEffect, useState } from 'react'

const ConsumoApi = () => {
  const [data, setData] = useState('')

  const getData = async () => {
    try {
      const respuesta = await fetch('https://api.sampleapis.com/beers/ale')
      const json = await respuesta.json()
      setData(json)
    } catch (error) {
      setData(error.message)
    }
  }

  useEffect(() => {
    // getData actualiza el estado después de esperar la respuesta de la API.
    // oxlint-disable-next-line react/set-state-in-effect
    getData()
  }, [])

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export default ConsumoApi
