import loginService from '../services/login'
import storage from '../utils/storage'

const userReducer = (state = null, action) => {
  console.log(action)
  switch(action.type) {
  case 'SET_USER':
    return action.data
  case 'CLEAR_USER':
    return null
  default:
    return state
  }
}

export const loginUser = (username, password) => {
  return dispatch => {
    return loginService.login({ username, password })
      .then((user) => {
        storage.saveUser(user)
        dispatch({
          type: 'SET_USER',
          data: user
        })
        return user
      })
      .catch((error) => console.error(error))
  }
}

export const loadUser = () => {
  return {
    type: 'SET_USER',
    data: storage.loadUser()
  }
}

export const logoutUser = () => {
  storage.logoutUser()
  return {
    type: 'CLEAR_USER'
  }
}

export default userReducer