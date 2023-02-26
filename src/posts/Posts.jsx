import React from 'react'
import Post from '../post/Post'

function Posts({posts}) {
  return (
      <div className='posts flex-1 flex items-start flex-wrap'>
      {
        posts.map((post) => (
          <Post key={Math.random() * 100000} post={post} /> 
        ))
        }  
    </div>
  )
}

export default Posts