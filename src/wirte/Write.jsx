import React, { useContext, useState } from 'react'
import axios from 'axios';
import { context } from '../context/Context';

function Write() {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const { user } = useContext(context);



    const handleSubmit = async(e) => {
        e.preventDefault();
         
        const newPost = {
            username: user.result.username,
            title,
            desc,
            
        };

       if (selectedFile) {
      const data =new FormData();
      const filename = selectedFile.name;
      data.append("name", filename);
      data.append("file", selectedFile);
      newPost.photo = filename;
      try {
          await axios.post("/upload",data);

      } catch (err) {
          console.log(err);
      }
       }


        try {
            const res = await axios.post('/post', newPost);
            window.location.replace('/');

            console.log(res);
        } catch (err) {
            console.log(err);  
    }

       



       
        
    }

  return (
      <div className='write pt-[10px] pb-[100px]'>
          {
              selectedFile && (
                  <img className='  w-[80%] mx-auto   rounded-2xl object-contain' src={URL.createObjectURL(selectedFile)} alt="" /> 
              )
          }
         
          <form className='wirteForm  mt-[40px] flex flex-col items-center justify-center'  encType='multipart/form-data' onSubmit={handleSubmit}>
              <div className="writeFormGroup w-[90%]   rounded-2xl drop-shadow-2xl flex items-center">
                  <label htmlFor='fileInput'>
                      <i class="writeIcon animate-bounce mx-3 text-[20px] h-[25px] w-[25px] rounded-full border flex items-center justify-center fa-solid fa-plus cursor-pointer bg-black  text-white"></i>
                  </label>
                  <input type='file' name='file' onChange={(e) => setSelectedFile(e.target.files[0])} className=' hidden' id="fileInput"></input>
                  <input onChange={(e)=>setTitle(e.target.value)} type='text' className='writeInput outline-none rounded-xl text-[20px] border-none p-[10px] w-[90%]'  placeholder="Title" autoFocus={true } ></input> 
              </div>
              <div className='writeFormGroup w-[90%]  rounded-2xl drop-shadow-2xl my-4 '>
                  <textarea onChange={(e)=>setDesc(e.target.value)} placeholder='Tell your story...' type="text" className='writeInput  rounded-2xl outline-none h-[500px] text-[20px] border-none p-[20px] w-[100%] '></textarea>
              </div>
              <div className='flex items-center justify-center mt-7'>
                  <button type='submit' className="writeSubmit  border p-3 px-6 rounded-md bg-black text-white">Publish</button>
              </div>
          </form>
    </div>
  )
}

export default Write