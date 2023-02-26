import React, { useContext, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { context } from '../context/Context'
import axios from 'axios';

function Setting() {
    const [selectedFile, setSelectedFile] = useState('');
    const { user, dispatch } = useContext(context);

    
    
  const [username, setUsername] = useState(user.result.username);
  const [email, setEmail] = useState(user.result.email);
  const [password, setPassword] = useState(user.result.password);
    

    
    




const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
         
        const newPost = {
            username: username,
            email: email,
            password:password
            
        };

       if (selectedFile) {
      const data =new FormData();
      const filename = selectedFile.name;
      data.append("name", filename);
      data.append("file", selectedFile);
      newPost.profilePic = filename;
      try {
          await axios.post("/upload",data);

      } catch (err) {
          console.log(err);
      }
       }


        try {
            const res = await axios.put(`/user/${user.result._id}`, newPost);
                dispatch({ type: 'UPDATE_SUCCESS',payload:res.data });

        } catch (err) {
             dispatch({type:'UPDATE_FAILURE'})
    }

   
    }


  return (
      <div className='setting flex'>
          <div className="settingWrapper p-[20px] bg-slate-50 rounded-2xl drop-shadow-2xl flex-1">
              

              <form onSubmit={handleSubmit} className='settingsForm flex flex-col'>
                  <label className=' self-center my-3' >Profile Picture </label>
                  <div className="settingPP mb-5 flex flex-col">
                      {
                          selectedFile? <img className=' max-h-[200px] object-cover rounded-t-2xl' src={URL.createObjectURL(selectedFile)} alt="" />: <img className='max-h-[200px] rounded-t-2xl object-cover' src={`http://localhost:3004/images/${user.result.profilePic}`}  alt="" />
                      }
                     
                      
                      <label htmlFor='fileInput' className='bg-black p-3 flex items-center justify-center rounded-b-2xl'>
                          <i class="fa-solid fa-user text-lg cursor-pointer text-white"></i>
                          
                      </label>

                      <input type="file" onChange={(e)=>{setSelectedFile(e.target.files[0])}} className=' hidden' id="fileInput"></input>
                  </div>

                     <label className='text-[20px] mt-[20px]'>
                        Username
                      </label>

                      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}   className=" rounded-xl border mt-4 h-[80px] bg-gray-50 px-5" ></input>

                       <label className=' text-[20px] mt-[20px]'>
                        Email
                      </label>

                      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  className=" mt-4 h-[80px] border bg-gray-50 rounded-xl px-5"></input>

                       <label className=' text-[20px] mt-[20px]'>
                        Password
                      </label>

                  <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="border bg-gray-50 h-[80px] rounded-xl px-5 mt-4"></input>
                  
                  <button type='submit' className=' cursor-pointer border self-center mt-3  drop-shadow-xl w-[80px] py-3 rounded-md bg-black text-white submitButton'>Update </button>
              </form>
              

          </div>
           <Sidebar/>  
    </div>
  )
}

export default Setting 