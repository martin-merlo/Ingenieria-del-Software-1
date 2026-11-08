import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'delivery-direcciones-v1'
const localities = {
  'Buenos Aires': ['Belgrano', 'Caballito', 'Palermo'],
  Córdoba: ['Alberdi', 'Centro', 'Nueva Córdoba'],
  Rosario: ['Centro', 'Fisherton', 'Pichincha'],
}
const emptyAddress = {
  coordinates: '', street: '', number: '', floor: '', apartment: '',
  city: '', locality: '', notes: '', alias: '',
}
const addressFields = Object.keys(emptyAddress)

function loadAddresses() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved.filter((address) =>
      typeof address?.id === 'string' && addressFields.every((key) => typeof address[key] === 'string'),
    ) : []
  } catch {
    return []
  }
}

function validateAddress(address) {
  const errors = {}
  const [lat, lng, ...extra] = address.coordinates.split(',').map((part) => part.trim())
  const decimal = /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/
  if (!address.coordinates) {
    errors.coordinates = 'Ingresá las coordenadas.'
  } else if (!decimal.test(lat) || !decimal.test(lng ?? '') || extra.length ||
    Math.abs(Number(lat)) > 90 || Math.abs(Number(lng)) > 180) {
    errors.coordinates = 'Ingresá una latitud y longitud válidas separadas por coma.'
  }

  if (!address.street) errors.street = 'Ingresá la calle.'
  if (!address.number) errors.number = 'Ingresá el número.'
  const validCity = Object.hasOwn(localities, address.city)
  if (!validCity) errors.city = 'Seleccioná una ciudad.'
  if (!validCity || !localities[address.city].includes(address.locality)) {
    errors.locality = 'Seleccioná una localidad de esa ciudad.'
  }
  if (!address.alias) errors.alias = 'Ingresá un alias.'
  return errors
}

function Field({ label, name, value, error, onChange, options, emptyLabel, disabled, required, placeholder, multiline }) {
  const props = {
    id: name,
    name,
    value,
    onChange,
    required,
    disabled,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${name}-error` : undefined,
  }

  return (
    <div className="field">
      <label htmlFor={name}>{label}{required && ' *'}</label>
      {options ? (
        <select {...props}>
          <option value="">{emptyLabel}</option>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : multiline ? (
        <textarea {...props} rows={1} />
      ) : (
        <input {...props} placeholder={placeholder} />
      )}
      {error && <span className="field-error" id={`${name}-error`}>{error}</span>}
    </div>
  )
}

function AddressDialog({ address, removing, onCommit, onClose }) {
  const dialogRef = useRef(null)
  const cancelRef = useRef(null)
  const [values, setValues] = useState(() => ({ ...emptyAddress, ...address }))
  const [errors, setErrors] = useState({})
  const [saveError, setSaveError] = useState('')
  const title = removing ? 'Dar de baja dirección' : address ? 'Modificar dirección' : 'Agregar dirección'

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal()
    if (removing) cancelRef.current.focus()
    else dialog.querySelector('input').focus()
    return () => dialog.close()
  }, [removing])

  function handleChange(event) {
    const { name, value } = event.target
    setValues((previous) => ({
      ...previous,
      [name]: value,
      ...(name === 'city' ? { locality: '' } : {}),
    }))
    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
      ...(name === 'city' ? { locality: undefined } : {}),
    }))
    setSaveError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    let cleaned

    if (!removing) {
      cleaned = Object.fromEntries(
        addressFields.map((key) => [key, values[key].trim()]),
      )
      const nextErrors = validateAddress(cleaned)
      if (Object.keys(nextErrors).length) {
        setErrors(nextErrors)
        const firstField = event.currentTarget.elements.namedItem(Object.keys(nextErrors)[0])
        if (!firstField.disabled) firstField.focus()
        return
      }

    }

    try {
      onCommit(cleaned)
    } catch {
      setSaveError('No se pudo guardar el cambio en este navegador.')
    }
  }

  const field = (name) => ({ name, value: values[name], error: errors[name], onChange: handleChange })
  const hasErrors = Object.values(errors).some(Boolean)
  const cityOptions = Object.hasOwn(localities, values.city) ? localities[values.city] : []

  return (
    <dialog ref={dialogRef} aria-labelledby="address-dialog-title" onCancel={(event) => {
      event.preventDefault()
      onClose()
    }}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="dialog-header">
          <h2 id="address-dialog-title">{title}</h2>
          <button className="close-button" type="button" aria-label="Cerrar" onClick={onClose}>×</button>
        </div>

        {removing ? (
          <p>¿Querés dar de baja la dirección <strong>{address.alias}</strong>?</p>
        ) : (
          <div className="address-fields">
            <Field {...field('coordinates')} label="Coordenadas" required placeholder="-34.6037, -58.3816" />
            <Field {...field('street')} label="Calle" required />
            <div className="three-fields">
              <Field {...field('number')} label="Número" required />
              <Field {...field('floor')} label="Piso" />
              <Field {...field('apartment')} label="Depto" />
            </div>
            <div className="two-fields">
              <Field {...field('city')} label="Ciudad" required
                options={Object.keys(localities)} emptyLabel="Seleccioná tu ciudad" />
              <Field {...field('locality')} label="Localidad" required disabled={!values.city}
                options={cityOptions} emptyLabel="Seleccioná tu localidad" />
            </div>
            <Field {...field('notes')} label="Aclaraciones" multiline />
            <Field {...field('alias')} label="Alias" required />
          </div>
        )}

        {hasErrors && <p className="form-error" role="alert">Revisá los campos indicados.</p>}
        {saveError && <p className="form-error" role="alert">{saveError}</p>}

        <div className="dialog-actions">
          <button type="button" onClick={onClose} ref={cancelRef}>Cancelar</button>
          <button type="submit" className="primary">{removing ? 'Eliminar' : 'Guardar'}</button>
        </div>
      </form>
    </dialog>
  )
}

export default function App() {
  const [addresses, setAddresses] = useState(loadAddresses)
  const [action, setAction] = useState(null)

  function saveAddress(values) {
    const id = action.address?.id
    const next = action.type === 'remove'
      ? addresses.filter((address) => address.id !== id)
      : action.type === 'edit'
        ? addresses.map((address) => address.id === id ? { ...values, id } : address)
        : [...addresses, { ...values, id: crypto.randomUUID() }]

    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setAddresses(next)
    setAction(null)
  }

  return (
    <>
      <header className="site-header"><div>Delivery</div></header>
      <main>
        <div className="list-heading">
          <h1>Mis direcciones</h1>
          <button className="primary" type="button" onClick={() => setAction({ type: 'add' })}>
            Agregar dirección
          </button>
        </div>

        {addresses.length === 0 ? (
          <p className="empty-list">Todavía no tenés direcciones guardadas.</p>
        ) : (
          <ul className="address-list" aria-label="Direcciones guardadas">
            {addresses.map((address) => (
              <li key={address.id}>
                <div className="address-info">
                  <h2>{address.alias}</h2>
                  <p>{address.street} {address.number} · {address.locality}, {address.city}</p>
                  {(address.floor || address.apartment) && <p>
                    {[address.floor && `Piso ${address.floor}`, address.apartment && `Depto ${address.apartment}`]
                      .filter(Boolean).join(' · ')}
                  </p>}
                  {address.notes && <p className="notes">{address.notes}</p>}
                </div>
                <div className="row-actions">
                  <button type="button" aria-label={`Editar ${address.alias}`}
                    onClick={() => setAction({ type: 'edit', address })}>Editar</button>
                  <button type="button" aria-label={`Eliminar ${address.alias}`}
                    onClick={() => setAction({ type: 'remove', address })}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>

      {action && <AddressDialog
        address={action.address}
        removing={action.type === 'remove'}
        onCommit={saveAddress}
        onClose={() => setAction(null)}
      />}
    </>
  )
}
