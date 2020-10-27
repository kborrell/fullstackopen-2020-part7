import React, { useEffect } from 'react'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import LoggedUser from './components/LoggedUser'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Users from './components/Users'
import UserInfo from './components/UserInfo'

import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import { loadUser } from './reducers/userReducer'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const blogs = useSelector(state => state.blogs)

  useEffect(() => {
    dispatch(loadUser())
    dispatch(initializeBlogs())
  }, [])

  const match = useRouteMatch('/blogs/:id')
  const blog = match
    ? blogs.find(blog => blog.id === match.params.id)
    : null

  if ( !user ) {
    return <LoginForm />
  }

  const padding = {
    padding: 5,
    display: 'inline-block'
  }

  const navBar = {
    'background-color': 'Gainsboro',
  }

  return (
    <div>
      <div style={ navBar }>
        <Link style={ padding } to='/'>blogs</Link>
        <Link style={ padding } to='/users'>users</Link>
        <LoggedUser style={ padding } />
      </div>
      <h2>blogs</h2>

      <Notification />

      <Switch>
        <Route path='/blogs/:id'>
          <Blog blog={ blog } />
        </Route>
        <Route path='/users/:id'>
          <UserInfo />
        </Route>
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