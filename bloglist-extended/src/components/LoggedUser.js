import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'

const LoggedUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const padding = {
    padding: 5
  }

  return (
    <span style={ padding }>
      {user.name} logged in <button onClick={handleLogout}>logout</button>
    </span>
  )
}

export default LoggedUser