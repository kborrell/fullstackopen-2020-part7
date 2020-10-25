import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_BLOGS':
    return action.data
  case 'CREATE_BLOG':
    return [...state, action.data]
  case 'REMOVE_BLOG':
    return state.filter(blog => blog.id !== action.data)
  case 'LIKE_BLOG':
    return state.map(b => b.id === action.data ?  { ...b, likes: b.likes + 1 } : b)
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = (blog) => {
  return async dispatch => {
    try {
      const newBlog = await blogService.create(blog)
      dispatch({
        type: 'CREATE_BLOG',
        data: newBlog
      })
    } catch (exception) {
      console.error(exception)
    }
  }
}

export const removeBlog = (blog) => {
  return async dispatch => {
    try {
      await blogService.remove(blog.id)
      dispatch({
        type: 'REMOVE_BLOG',
        data: blog.id
      })
    } catch (exception) {
      console.error(exception)
    }
  }
}

export const likeBlog = (blog) => {
  return async dispatch => {
    try {
      const likedBlog = { ...blog, likes: blog.likes + 1, user: blog.user.id }
      await blogService.update(likedBlog)
      dispatch({
        type: 'LIKE_BLOG',
        data: blog.id
      })
    } catch (exception) {
      console.error(exception)
    }
  }
}

export default blogReducer