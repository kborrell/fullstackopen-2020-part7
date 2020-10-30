import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'
import { Button } from 'react-bootstrap'

const LoggedUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <span>
      {user.name} logged in <Button className='btn-light btn-sm' onClick={handleLogout}>logout</Button>
    </span>
  )
}

export default LoggedUser