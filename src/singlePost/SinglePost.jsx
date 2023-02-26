import React, { useContext, useEffect, useState } from 'react'
import './singlePost.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {context} from '../context/Context';

function SinglePost() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const { user } = useContext(context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');





  useEffect(() => {
  
    const getPost = async () => {
      const res = await axios.get(`/post/${id}`);

      setPost(res.data.result);
      setTitle(res.data.result.title);
      setDesc(res.data.result.desc);
    }
    getPost();

  }, [id]);

  const handleDelete = async () => {
   
    try {
      
     await axios.delete(`/post/${post._id}`);
      window.location.replace('/');
      
    } catch (err) {
     
    }

  };
  
  const handleUpdate = async () => {
    try {
      
       await axios.put(`/post/${post._id}`, {
       username:post.username,title:title,desc:desc
       });
      
      setUpdateMode(false);
      setErrorMsg('');
     

    } catch (err) {
      setErrorMsg(err.response.data.msg);
    }
  }
  
  return (
      <div className=' flex-1 bg-gray-50 rounded-2xl drop-shadow-2xl'>
      <div className='singlePostWrapper  flex flex-col border-2 p-[20px]'>
        {
          post.photo && (
  <img  src={`http://localhost:3004/images/${post.photo}`} alt="" className="singlePostImg  w-full h-[400px] rounded-2xl object-contain " />
          )
        }
        {
          updateMode ? <div className=' mt-5 flex flex-col'>
            <h3 className='font-thin text-[20px]'>Title:<span className=' text-red-700 font-bold ml-2'>{errorMsg}</span></h3>
            <input className='p-3 border-2 rounded-lg mt-5' type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> 
          </div>: (
             <h1 className='singPostTile text-center m-[10px] text-[1.8rem] border-dashed font-bold '>{title}
          
          {
            post.username === user?.result.username && (
  <div className="singlePostEdit float-right text-[2rem] text-center">
                      <i class="singlePostIcon m-2 cursor-pointer fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                     <i class="singlePostIcon m-2  cursor-pointer fa-solid fa-square-minus" onClick={handleDelete}></i>
                  </div>
            )
          }
                
                  
              </h1>
          )
        }
            
       
              <div className='singlePostInfo flex items-center justify-between text-[16px] my-[20px]'>
          <span className='singlePostAuthor'>Author:
            <Link to={`/?user=${post.username}`}>
               <b>{post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate '>{new Date(post.createdAt).toDateString()}</span>

        </div>
        
        {
          updateMode ? <div className='flex flex-col mt-5'>
            <h3 className='font-thin text-[30px] mb-5'>Description:</h3>
            <textarea className='border-2 rounded-lg p-3 text-[20px] h-[300px]' type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  /> </div> : (
              <p className='singlePostDescription text-[16px] text-justify p-3'>{desc}</p>
          )
        }
        {
          updateMode ? <div>
            <button className='w-[100px] bg-black text-white p-3 rounded-lg  mt-8 hover:drop-shadow-2xl cursor-pointer m-5' onClick={handleUpdate}>Update</button>

            <button onClick={()=> setUpdateMode(false)} className='w-[100px] bg-black text-white p-3 rounded-lg  mt-8 hover:drop-shadow-2xl cursor-pointer m-5'>Cancle</button>
          
          </div> : ''
      }
      </div>
    </div>
  )
}

export default SinglePost