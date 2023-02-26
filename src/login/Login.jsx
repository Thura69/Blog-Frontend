
import axios from 'axios';
import React, { useContext } from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import { context } from '../context/Context';


function Login() {


  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch, isFetching } = useContext(context);


  const handleSubmit =async (e) => { 
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post('/user/login', {
        username: userRef.current.value,
        password:passwordRef.current.value
      }) 
      
      dispatch({ type: "LOGIN_SUCCESS", payload:res.data });
      

    } catch (err) {
      dispatch({type:'LOGIN_FAILURE'})
    }

  
  }


  console.log(user);

    
  return (
    <div className='login h-[93vh] flex flex-col justify-center items-center border-2'>
      <span className='loginTitle text-[30px] mb-2'>Login</span>
      <form className="loginForm flex flex-col w-[80%] p-5 rounded-lg drop-shadow-2xl bg-gray-50" onSubmit={handleSubmit}>
        <label className='my-2'>Username</label>
        <input type="text " ref={userRef} className='p-2 rounded-lg' placeholder='Enter your username...' />
        <label className='my-2'>Password</label>
        <input type="text" className='p-2 rounded-lg' placeholder='Enter your password' ref={passwordRef}></input>
        <button type='submit' className='loginButton mt-[20px] cursor-pointer bg-black text-white py-3 rounded-lg' disabled={isFetching}>{isFetching?"Loading":"Login"}</button>
      
      </form>

        <button className=' absolute py-3 px-1 rounded-lg bg-black text-white top-[100px] right-[60px] loginRegisterButton'>
        <Link to='/register'>Register</Link>
        </button>

    </div>
  )
}

export default Login