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