import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'

function Post({ post }) {
    

  return (
      <div className='post min-w-full md:min-w-[40%] max-w-[40%]  mt-[25px] mr-[40px] mb-[25px ] flex-1 p-4 rounded-2xl bg-gray-100 drop-shadow-2xl'>
          {
              post.photo && (
                <img
              className='postImg h-[300px] object-cover mx-auto rounded-2xl'
              alt=""
              src={`http://localhost:3004/images/${post.photo}`}
          />  
              )
          }
          
          <div className='postInfo flex flex-col items-center'>
              <div className='postCats text-md font-thin mt-[15px]'>
                  {
                      post.categories.map((c) => (
                          <span className='postCat mr-[15px] cursor-pointer'>{c.name}</span>    
                      ))
                  }
              </div>
              <Link to={`/post/${post._id}`}>
               <span className='postTitle text-lg font-bold mt-[15px]  cursor-pointer'>
              {
                      post.title
              }
              </span>   
              </Link>
              
              <hr />
              <span className='postDate italic mt-[6px] mb-[15px]'>
                  {
                      new Date(post.createdAt).toDateString()
                 }
              </span>
          </div>
          <p className='postDes mt-[15px] leading-6'> 
              {
                  post.desc
             }
          </p>
    </div>
  )
}

export default Post