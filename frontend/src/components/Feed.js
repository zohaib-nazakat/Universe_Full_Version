import React, { useEffect, useState }  from 'react'
import UniverseBox from './UniverseBox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'
import Footer from './Footer'


function Feed() {
  const [posts, setPosts] = useState([])
useEffect (() => {
axios
.get("/api/questions")
.then((res) => {
console.log(res.data.reverse());
setPosts (res.data)
})
.catch((e) => {
console.log(e);
});
}, []);
 
  return (
    <div className='feed'>
      <UniverseBox />
      
 {posts.map((post, index) => (
 <Post key={index} post={post} />
))}
    
     <Footer/>
      {/* <Post />
      <Post />
      <Post /> */}
    </div>
  )
}

export default Feed
