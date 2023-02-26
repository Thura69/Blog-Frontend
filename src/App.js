import React, { useContext } from 'react'
import Login from './login/Login'
import Topbar from './topbar/Topbar'
import Write from './wirte/Write'
import Setting from './setting/Setting'
import Register from './login/Register'


import Home from './pages/home/Home'
import SinglePost from './singlePost/SinglePost'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { context } from './context/Context'



function App() {
  const {user} = useContext(context);


  return (
    <BrowserRouter>
      <Topbar />     
      
      <Routes>

       
         <Route path='/' element={user?<Home/>:<Register/>}></Route> 
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={user?<Home/>:<Login/>} ></Route>
        <Route path='/write' element={user?<Write/>:<Register/>}></Route>
        <Route path='/setting' element={user?<Setting/>:<Register/>}></Route>
        <Route path='/post/:id' element={user?<SinglePost/>:<Register/>}></Route>
      </Routes>
       
    </BrowserRouter>
  )
}

export default App