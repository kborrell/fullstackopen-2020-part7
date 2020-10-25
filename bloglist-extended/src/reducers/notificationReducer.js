const notificationReducer = (state = null, action) => {
  switch(action.type) {
  case 'SHOW_NOTIFICATION':
    return action.data
  case 'CLEAR_NOTIFICATION':
    return null
  default:
    return state
  }
}

let timerId = null
export const showNotification = (message, type, duration) => {
  return async dispatch => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }

    dispatch({
      type: 'SHOW_NOTIFICATION',
      data: {
        type,
        message
      }
    })

    timerId = setTimeout(() => {
      timerId = null
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, duration)
  }
}

export default notificationReducer