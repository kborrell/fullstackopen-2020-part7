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
import { Navbar, Nav } from 'react-bootstrap'

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
    return <div className='container'><LoginForm /></div>
  }

  return (
    <div className='container'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link className='text-white' to='/'>blogs</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link className='text-white' to='/users'>users</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <LoggedUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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