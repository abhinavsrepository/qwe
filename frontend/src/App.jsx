import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
// import './App.css'

function App() {
  
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users')
      setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
  }
  , [])

  const addUser = async (user) => {
    await axios.post('http://localhost:5000/api/users', user)
    fetchUsers()
  }
  const updateUser = async (id, updatedUser) => {
    await axios.put(`http://localhost:5000/api/users/${id}`, updatedUser)
    fetchUsers()
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`)
    fetchUsers()
  }
  

  return (
    <div style={{ padding: '20px' }}>
      <h2>User CRUD App</h2>
      <UserForm onAdd={addUser} />
      <UserList users={users} onUpdate={updateUser} onDelete={deleteUser} />

    </div>
  )
}

export default App
