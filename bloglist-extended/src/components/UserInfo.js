import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import userService from '../services/users'

const UserInfo = () => {
  const [userViewed, setUserViewed] = useState(null)
  const userId = useParams().id

  useEffect(() => {
    const fetch = async () => {
      const users = await userService.getAll()
      setUserViewed(users.find(user => user.id === userId))
    }
    fetch()
  }, [])

  if (userViewed)
  {
    return (
      <div className='mt-4'>
        <h3 className='display-4'>{userViewed.name}</h3>
        <h5>Added blogs</h5>
        <ul>
          {userViewed.blogs.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}

export default UserInfo