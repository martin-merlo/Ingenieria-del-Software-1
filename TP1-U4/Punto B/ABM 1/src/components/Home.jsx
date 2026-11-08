import { Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Employees from './Employees.js'

function Home() {
  const history = useNavigate()

  const handleEdit = (id, name, age) => {
    localStorage.setItem('id', id)
    localStorage.setItem('Name', name)
    localStorage.setItem('Age', age)
  }

  const handleDelete = (id) => {
    const index = Employees.findIndex((employee) => employee.id === id)
    if (index !== -1) {
      Employees.splice(index, 1)
      history('/')
    }
  }

  return (
    <div className="employee-list">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {Employees.length > 0 ? Employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.Name}</td>
              <td>{employee.Age}</td>
              <td>
                <Button
                  as={Link}
                  to="/edit"
                  onClick={() => handleEdit(employee.id, employee.Name, employee.Age)}
                >
                  Edit
                </Button>
                {' '}
                <Button onClick={() => handleDelete(employee.id)}>DELETE</Button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={3}>No data available</td>
            </tr>
          )}
        </tbody>
      </Table>
      <br />
      <div className="d-grid gap-2">
        <Button as={Link} to="/create" size="lg">Create</Button>
      </div>
    </div>
  )
}

export default Home
