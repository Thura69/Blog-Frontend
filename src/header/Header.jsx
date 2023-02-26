import React from 'react'

function Header() {
  return (
      <div className='header '>
          <div className='headerTitles flex flex-col items-center'>
              <span className='header_title_sm absolute
               top-36 font-thin  text-[20px]'>React & Node</span>
              <span className='header_title_lg absolute  text-[50px] font-bold top-48'>Blog</span>
          </div>
          <img className='headerImg' src="https://i0.wp.com/picjumbo.com/wp-content/uploads/road-and-fields-covered-with-snow.jpg?w=2210&quality=70" alt=""></img>
    </div>
  )
}

export default Header