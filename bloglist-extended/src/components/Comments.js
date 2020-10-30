import React from 'react'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'
import { commentBlog } from '../reducers/blogReducer'
import { Form, Button } from 'react-bootstrap'

const Comments = ({ blog }) => {
  const comment = useField('text')
  const dispatch = useDispatch()

  const handleNewComment = (event) => {
    event.preventDefault()

    dispatch(commentBlog(blog, comment.value))

    comment.reset()
  }

  // eslint-disable-next-line no-unused-vars
  const getInputProps = ({ reset, ...props }) => props

  return (
    <div className='mt-5'>
      <h4>Comments</h4>
      <Form onSubmit={handleNewComment}>
        <div>
          <input
            className='form-control'
            id='comment'
            {...getInputProps(comment)}
          />
          <Button className='mt-1' id="create">add comment</Button>
        </div>
      </Form>
      <ul className='mt-3'>
        {blog.comments && blog.comments.map((comment, index) => (
          <li key={index}>{ comment }</li>
        ))}
      </ul>
    </div>
  )
}

export default Comments