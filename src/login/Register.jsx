import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/user/register', {
            username,
            email,
            password
            });
            res.data && window.location.replace('/login');

            setUsername(''); setEmail(''); setPassword('');

        } catch (err) {
            setError(err.response.data);
       }
    }

  return (
    <div className=' h-[93vh] flex flex-col justify-center items-center border'>
      <span className=' text-[30px] mb-2'>Register</span>
          <form className=" flex flex-col w-[80%] p-5 rounded-lg drop-shadow-2xl bg-gray-50" onSubmit={handleSubmit}>
              
         <label className='my-3'>Username</label>
              <input type="text " className='p-2 rounded-lg' placeholder='Enter your username...' onChange={e=>setUsername(e.target.value)}/>
              
        <label className='my-3'>Email</label>
        <input type="text " className='p-2 rounded-lg' placeholder='Enter your email...' onChange={e=>setEmail(e.target.value)} />
        <label className='my-3'>Password</label>
        <input type="text" className='p-2 rounded-lg' placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}></input>
              <button className=' mt-[20px] cursor-pointer bg-black text-white py-3 rounded-lg' type="submit">Register</button>
              
              <button className=' absolute py-3 px-1 rounded-lg bg-black text-white top-[100px] right-[60px] '>
                  <Link to='/login'>Login</Link>
              </button>
              {
                  error.con ? "" : <span className='mx-auto mt-2 '>{error.msg}</span>
              }
              

      </form>
    </div>
  )
}

export default Register