import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog, likeBlog } from '../reducers/blogReducer'
import Comments from './Comments'
import { Button } from 'react-bootstrap'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.user)
  const own = blog ? user.username === blog.user.username : false

  const handleLike = async (id) => {
    const blogToLike = blogs.find(b => b.id === id)
    dispatch(likeBlog(blogToLike))
  }

  const handleRemove = (id) => {
    const blogToRemove = blogs.find(b => b.id === id)
    const ok = window.confirm(`Remove blog ${blogToRemove.title} by ${blogToRemove.author}`)
    if (ok) {
      dispatch(removeBlog(blogToRemove))
    }
  }

  if (blog) {
    return (
      <div className='mt-5'>
        <h3>{blog.title} <small className='text-muted'>{blog.author}</small></h3>
        <div className='blockquote'><a href={blog.url}>{blog.url}</a></div>
        <div><strong>likes {blog.likes}</strong>
          <Button className='btn-success btn-sm ml-2' onClick={() => handleLike(blog.id)}>like</Button>
        </div>
        <div className='text-secondary'>added by {blog.user.name}</div>
        <Comments blog={ blog } />
        {own&&<Button className='btn-danger' onClick={() => handleRemove(blog.id)}>remove</Button>}
      </div>
    )
  }

  return null
}

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })
}

export default Blog