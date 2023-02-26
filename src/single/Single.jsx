import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import SinglePost from '../singlePost/SinglePost'

function Single() {
  return (
    <div className='single flex'>
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default Single