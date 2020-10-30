import React, { useEffect, useState } from 'react'
import userService from '../services/users'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await userService.getAll()
      setUsers(response)
    }
    fetch()
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <Table striped>
        <tbody>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
          {users.map( user => (
            <tr key={user.id} >
              <td><Link to={`/users/${user.id}`}>{user.name}</Link></td><td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Users