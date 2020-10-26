import React from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { useField } from '../hooks'

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
      <h2>create new</h2>
      <form onSubmit={handleNewBlog}>
        <div>
          author
          <input
            id='author'
            {...getInputProps(author)}
          />
        </div>
        <div>
          title
          <input
            id='title'
            {...getInputProps(title)}
          />
        </div>
        <div>
          url
          <input
            id='url'
            {...getInputProps(url)}
          />
        </div>
        <button id="create">create</button>
      </form>
    </div>
  )
}

export default NewBlog