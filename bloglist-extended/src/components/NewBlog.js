import React from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { useField } from '../hooks'
import { Form, Button } from 'react-bootstrap'

const NewBlog = () => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const dispatch = useDispatch()

  const handleNewBlog = (event) => {
    event.preventDefault()

    dispatch(createBlog({
      title: title.value,
      author: author.value,
      url: url.value
    }))

    title.reset()
    author.reset()
    url.reset()
  }

  // eslint-disable-next-line no-unused-vars
  const getInputProps = ({ reset, ...props }) => props

  return (
    <div>
      <h3>Create new</h3>
      <Form onSubmit={handleNewBlog}>
        <div className='form-group'>
          <label htmlFor='author'>author</label>
          <input
            id='author'
            className='form-control'
            {...getInputProps(author)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='title'>title</label>
          <input
            id='title'
            className='form-control'
            {...getInputProps(title)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='url'>url</label>
          <input
            id='url'
            className='form-control'
            {...getInputProps(url)}
          />
        </div>
        <Button id="create">create</Button>
      </Form>
    </div>
  )
}

export default NewBlog