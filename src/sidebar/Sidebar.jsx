import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/category');

            setCat(res.data.result);
        }
        getCats();
    }, [])


    const handleCancle = () => {
       document.querySelector('.menu_side_bar').classList.toggle('active');
        document.querySelector(".wrapper").classList.toggle('active');
    }
    


  return (
      <>
       <div className='sidebar  hidden lg:flex  w-[300px]  m-[20px]  flex-col items-center rounded-2xl'>
          <div className='sidebarItem bg-gray-100 drop-shadow-2xl rounded-2xl flex flex-col items-center'>
              <span className='sidebarTitle p-4 m-[20px] font-bold border-y-[3px] text-black  border-black'>ABOUT ME</span>
              <img className='mt-[15px]' src='https://i0.wp.com/picjumbo.com/wp-content/uploads/freelance-man-typing-on-his-laptop-close-up-free-photo.jpg?w=2210&quality=70' alt=""></img>
              <p className=' p-[30px] text-center'>My name is Thura Nyi. Welcome from blog MERN stack project</p>
          </div>
          <div className='sidebarItem bg-gray-100 w-full drop-shadow-2xl rounded-2xl mt-[70px] py-[25px] flex flex-col items-center'>
              <span className='sidebarTitle p-4 m-[20px] font-bold border-y-[3px] text-black  border-black'>CATEGORIES</span> 
              <ul className='sidebarList  w-full  text-center'>
                  {
                      cat.map((c) => (
                          
                          <Link to={`/?cat=${c.name}`}>
                            <li key={ Math.random() * 1000000} className='sidebarListItem inline-block w-[50%] cursor-pointer '>
                                
                      {c.name} 
                  </li>       
                          </Link>
                          
                      
                      ))
                  }
               </ul>   
          </div>
          <div className='sidebarItem mt-[50px] text-center'>
              <span className='sidebarTitle font-bold  text-black  '>FOLLOW US</span> 
              <div className='sidebarSocial mt-[40px] mb-[50]'>
                  <i class=" text-xl mr-6 text-black cursor-pointer sidebar_icon fa-brands fa-square-facebook"></i>
                  
                  <i class=" text-xl mr-6 text-black cursor-pointer sidebar_icon fa-brands fa-twitter"></i>          
                  
                  <i class=" text-xl mr-6 text-black cursor-pointer sidebar_icon fa-brands fa-pinterest"></i>
                  
                  <i class=" text-xl mr-6 text-black cursor-pointer sidebar_icon fa-brands fa-instagram"></i>   
                  
              </div>
          </div>

         
      </div>
          <div className='call_menu_side_bar lg:hidden  text-2xl cursor-pointer absolute left-[20px] top-[70px]' onClick={handleCancle}>
              <i class="fa-solid fa-bars"></i>
         </div>
          <div className='menu_side_bar active z-10 fixed w-[70%] bg-white top-0 bottom-0 left-0 flex flex-col items-center justify-start p-3'>
              
              <div onClick={handleCancle} className='mt-[40px]  absolute right-[10px] top-3 text-3xl cursor-pointer  p-2 rounded-md'>
                   <i class="fa-solid fa-xmark"></i>
              </div>
              
            <div className='sidebarItem rounded-2xl mt-[60px] flex flex-col items-center'>
              <span className='sidebarTitle  m-[20px] font-bold border-y-[3px] text-black  border-black'>ABOUT ME</span>
              <img className=' rounded-2xl' src='https://i0.wp.com/picjumbo.com/wp-content/uploads/freelance-man-typing-on-his-laptop-close-up-free-photo.jpg?w=2210&quality=70' alt=""></img>
              <p className='p-[10px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos sapiente vitae modi soluta possimus quia quaerat nobis, debitis quisquam cumque, eius impedit dolores aperiam placeat velit illum delectus rem!</p>
              </div>
                <div className='mt-[30px]'>
              <span className='sidebarTitle p-4 m-[20px] font-bold mt-[20px] text-black'>CATEGORIES</span> 
              <ul className='sidebarList mb-[30px]  mt-[10px] text-center'>
                  {
                      cat.map((c) => (
                          
                          <Link to={`/?cat=${c.name}`}>
                            <li key={ Math.random() * 1000000} className='sidebarListItem inline-block w-[50%] cursor-pointer '>
                                
                      {c.name} 
                  </li>       
                          </Link>
                          
                      
                      ))
                  }
               </ul>   
          </div>
          </div>
          <div className='wrapper active fixed top-0 right-0 left-0 bottom-0  opacity-75 bg-black'></div>
      </>
  )  
}

export default Sidebar