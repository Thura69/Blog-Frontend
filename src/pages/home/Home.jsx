import React, { useEffect,useState } from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import axios from 'axios'



function Home() {
  const [posts, setPosts] = useState([]);



  
  


 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/post');
      setPosts(res.data.result)
    }

    

    fetchPosts();
    
  },[]);

  return (
    <>
          <Header />

          <div className='home flex'>
        <Posts posts={posts} />
              <Sidebar/>
          </div>
              
    </>
  )
}

export default Home