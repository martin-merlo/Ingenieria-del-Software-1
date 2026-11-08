import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Employees from './Employees.js'

function Add() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const history = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    let id = uuid().slice(0, 8)
    while (Employees.some((employee) => employee.id === id)) {
      id = uuid().slice(0, 8)
    }

    Employees.push({ id, Name: name, Age: age })
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
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default Add
