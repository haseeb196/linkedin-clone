import React, { useEffect, useState } from 'react'
import './Feed.css'
import db from './firebase'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => 
   setPosts(snapshot.docs.map((docs) => ({id: docs.id, data : docs.data()})))
    );
  }, []);


  return (
    <div className="feed">
   <MessageSender />
   <div className="feed__post">

   

   {posts.map((post) => (
    <Post  
   key={post.id}
   profilePic={post.data.profilePic}
   message={post.data.message}
   timestamp={post.data.timestamp}
   username={post.data.username}
   image={post.data.image}
   id={post.id}
    />
    
  ) )}
  </div>
    </div>
  
  )
}

export default Feed