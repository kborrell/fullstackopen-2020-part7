import React from 'react'
import { useSelector } from 'react-redux'
import Togglable from './Togglable'
import NewBlog from './NewBlog'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const blogFormRef = React.createRef()

  const byLikes = (b1, b2) => b2.likes - b1.likes

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div>
      <Togglable buttonLabel='create new blog'  ref={blogFormRef}>
        <NewBlog />
      </Togglable>

      {blogs.sort(byLikes).map(blog =>
        <div key={blog.id} className='blog' style={blogStyle}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      )}
    </div>
  )
}

export default Blogs