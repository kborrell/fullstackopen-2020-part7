import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'

export const useNotification = () => {
  const dispatch = useDispatch()

  const notifyWith = (message, duration, type='success') => {
    dispatch(showNotification(message, type, duration))
  }

  return {
    notifyWith
  }
}

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    reset
  }
}