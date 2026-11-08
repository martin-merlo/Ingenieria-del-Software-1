import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees.js'

function Edit() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const history = useNavigate()

  useEffect(() => {
    const selectedId = localStorage.getItem('id')
    if (!Employees.some((employee) => employee.id === selectedId)) {
      history('/', { replace: true })
      return
    }

    // El ejercicio carga la selección de localStorage al montar el formulario.
    // oxlint-disable-next-line react/set-state-in-effect
    setId(selectedId)
    setName(localStorage.getItem('Name') ?? '')
    setAge(localStorage.getItem('Age') ?? '')
  }, [history])

  const handleSubmit = (event) => {
    event.preventDefault()

    const employee = Employees.find((item) => item.id === id)
    if (employee) {
      employee.Name = name
      employee.Age = age
      localStorage.setItem('Name', name)
      localStorage.setItem('Age', age)
    }

    history('/')
  }

  return (
    <Form className="employee-form d-grid gap-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control
          type="text"
          placeholder="Enter Name"
          aria-label="Name"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Control
          type="text"
          placeholder="Enter Age"
          aria-label="Age"
          value={age}
          required
          onChange={(event) => setAge(event.target.value)}
        />
      </Form.Group>
      <Button type="submit">Update</Button>
    </Form>
  )
}

export default Edit
