import React, { useEffect } from 'react'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import LoggedUser from './components/LoggedUser'
import Blogs from './components/Blogs'
import Users from './components/Users'

import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { loadUser } from './reducers/userReducer'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(loadUser())
    dispatch(initializeBlogs())
  }, [])

  if ( !user ) {
    return <LoginForm />
  }

  return (
    <div>
      <h2>blogs</h2>

      <Notification />
      <LoggedUser />

      <Switch>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/'>
          <Blogs />
        </Route>
      </Switch>
    </div>
  )
}

export default App