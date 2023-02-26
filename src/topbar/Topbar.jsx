import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../context/Context';


function Topbar() {
  const { user, dispatch } = useContext(context);


  console.log(user);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    console.log("console.log");


  };
 

  
  return (
      <div className='Top h-14 px-5 justify-around bg-black sticky top-0 items-center font-["Varela_Round"] z-50 flex'>
          
<div className='topLeft  items-center justify-center flex-1 hidden lg:flex'>
              <i class=" text-xl mr-4 text-white cursor-pointer top_icon fa-brands fa-square-facebook"></i>
              <i class=" text-xl mr-4 text-white cursor-pointer top_icon fa-brands fa-twitter"></i>          
              <i class=" text-xl mr-4 text-white cursor-pointer top_icon fa-brands fa-pinterest"></i>
              <i class=" text-xl mr-4 text-white cursor-pointer top_icon fa-brands fa-instagram"></i>

              
              
</div>
          <div className='topCenter flex-1'>
              <ul className='top_list text-xs md:text-lg   gap-5 flex items-center justify-between text-white'>
          <li className=' font-bold  cursor-pointer top_list_item'>
            <Link to='/'>HOME</Link>
          </li>
          
       
          
          <li className=' font-bold  cursor-pointer top_list_item'><Link to='/write'>WRITE</Link></li>

          <li className=' font-bold  cursor-pointer top_list_item' onClick={handleLogout}>

            
            {
              user && "LOGOUT"
}
          </li>
              </ul>
</div>    
          <div className='topRight flex items-center justify-center flex-1 '>
        {
          user ? <Link to='/setting'>
          <img className='top_img w-[40px] h-[40px] rounded-full object-cover'  alt="" src={`http://localhost:3004/images/${user.result.profilePic}`}>
          </img> 
          </Link> : <ul className='flex'>
              
              <li className='mr-2'><Link className='link text-white' to='/login'>LOGIN</Link></li>
              
              <li><Link className='link text-white' to='/register'>REGISTER</Link></li>
              
              
            </ul>
           
        }
              

              <i class=" text-lg cursor-pointer text-white top_search_icon fa-solid fa-magnifying-glass ml-4"></i>
</div>    
          
    </div>
  )
}

export default Topbar