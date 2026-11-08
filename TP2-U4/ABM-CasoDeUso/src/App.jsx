import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'mi-consorcio-paises'
const initialCountries = [
  { id: '1', name: 'Chile' },
  { id: '2', name: 'Perú' },
  { id: '3', name: 'Uruguay' },
]
const titles = {
  add: 'Alta de país',
  edit: 'Modificar país',
  remove: 'Baja de país',
}
const compareNames = new Intl.Collator('es-AR', { sensitivity: 'base' })

function loadCountries() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (Array.isArray(stored) && stored.every(
      (country) => typeof country?.id === 'string' && typeof country?.name === 'string',
    )) {
      return stored
    }
  } catch {
    // Si el navegador no permite leer los datos, se abre el listado inicial.
  }
  return initialCountries
}

function CountryDialog({ action, countries, onSave, onClose }) {
  const dialogRef = useRef(null)
  const [name, setName] = useState(action.country?.name ?? '')
  const [error, setError] = useState('')
  const isRemoval = action.type === 'remove'

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal()
    if (isRemoval) dialog.querySelector('[data-cancel]').focus()
    return () => dialog.close()
  }, [isRemoval])

  function handleSubmit(event) {
    event.preventDefault()
    const id = action.country?.id
    const cleanName = name.trim()
    let nextCountries

    if (isRemoval) {
      nextCountries = countries.filter((country) => country.id !== id)
    } else {
      if (!cleanName) {
        setError('Ingresá el nombre del país.')
        return
      }
      const duplicate = countries.some((country) =>
        country.id !== id && compareNames.compare(country.name, cleanName) === 0,
      )
      if (duplicate) {
        setError('Ya existe un país con ese nombre.')
        return
      }

      nextCountries = action.type === 'edit'
        ? countries.map((country) =>
          country.id === id ? { ...country, name: cleanName } : country,
        )
        : [...countries, { id: crypto.randomUUID(), name: cleanName }]
    }

    try {
      onSave(nextCountries)
    } catch {
      setError('No se pudo guardar el cambio en este navegador.')
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="dialog-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <h2 id="dialog-title">{titles[action.type]}</h2>
        {isRemoval ? (
          <p>¿Estás seguro de que deseás dar de baja el país <strong>{action.country.name}</strong>?</p>
        ) : (
          <div className="field">
            <label htmlFor="country-name">Nombre</label>
            <input
              id="country-name"
              value={name}
              required
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'dialog-error' : undefined}
              onChange={(event) => {
                setName(event.target.value)
                setError('')
              }}
            />
          </div>
        )}
        {error && <p className="error" id="dialog-error" role="alert">{error}</p>}
        <div className="dialog-actions">
          <button type="submit" className="primary">Aceptar</button>
          <button type="button" data-cancel onClick={onClose}>Cancelar</button>
        </div>
      </form>
    </dialog>
  )
}

export default function App() {
  const [countries, setCountries] = useState(loadCountries)
  const [action, setAction] = useState(null)

  function saveCountries(nextCountries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCountries))
    setCountries(nextCountries)
    setAction(null)
  }

  return (
    <>
      <header className="site-header"><div>Mi Consorcio</div></header>
      <main>
        <div className="list-heading">
          <h1>Países</h1>
          <button type="button" className="primary" onClick={() => setAction({ type: 'add' })}>Alta</button>
        </div>
        <table aria-label="Listado de países">
          <thead>
            <tr>
              <th scope="col">Modificar</th>
              <th scope="col">Baja</th>
              <th scope="col">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.id}>
                <td>
                  <button
                    type="button"
                    aria-label={`Modificar ${country.name}`}
                    onClick={() => setAction({ type: 'edit', country })}
                  >
                    Modificar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    aria-label={`Dar de baja ${country.name}`}
                    onClick={() => setAction({ type: 'remove', country })}
                  >
                    Baja
                  </button>
                </td>
                <td>{country.name}</td>
              </tr>
            ))}
            {countries.length === 0 && (
              <tr><td colSpan={3}>No hay países registrados.</td></tr>
            )}
          </tbody>
        </table>
      </main>
      {action && (
        <CountryDialog
          action={action}
          countries={countries}
          onSave={saveCountries}
          onClose={() => setAction(null)}
        />
      )}
    </>
  )
}
