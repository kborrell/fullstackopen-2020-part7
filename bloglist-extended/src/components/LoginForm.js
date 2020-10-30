import React from 'react'
import Notification from './Notification'

import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { useNotification, useField } from '../hooks'

const LoginForm = () => {
  var username = useField('text')
  var password = useField('password')

  const dispatch = useDispatch()
  const notification = useNotification()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      dispatch(loginUser(username.value, password.value)).then((loggedUser) => {
        notification.notifyWith(`${loggedUser.name} welcome back!`, 5000)
        username.reset()
        password.reset()
      })
        .catch(() => notification.notifyWith('wrong username/password', 5000, 'error'))
    } catch(exception) {
      notification.notifyWith('wrong username/password', 5000, 'error')
    }
  }

  // eslint-disable-next-line no-unused-vars
  const getInputProps = ({ reset, ...props }) => props

  return (
    <div>
      <h2>login to application</h2>

      <Notification />

      <form onSubmit={handleLogin}>
        <div>
            username <input id='username' {...getInputProps(username)} />
        </div>
        <div>
            password <input id='password' {...getInputProps(password)} />
        </div>
        <button id='login'>login</button>
      </form>
    </div>
  )
}

export default LoginForm