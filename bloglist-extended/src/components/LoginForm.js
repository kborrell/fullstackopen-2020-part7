import React, { useState } from 'react'
import Notification from './Notification'

import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { useNotification } from '../hooks'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const notification = useNotification()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      dispatch(loginUser(username, password)).then((loggedUser) => {
        notification.notifyWith(`${loggedUser.name} welcome back!`, 5000)
        setUsername('')
        setPassword('')
      })
    } catch(exception) {
      notification.notifyWith('wrong username/password', 5000, 'error')
    }
  }

  return (
    <div>
      <h2>login to application</h2>

      <Notification />

      <form onSubmit={handleLogin}>
        <div>
            username
          <input
            id='username'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
            password
          <input
            id='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id='login'>login</button>
      </form>
    </div>
  )
}

export default LoginForm