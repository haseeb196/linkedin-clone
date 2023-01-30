import { Comment, Delete, Public, Repeat, Send, ThumbUp } from '@mui/icons-material'
import { Avatar, Button, CircularProgress, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import db from './firebase'
import './Post.css'

function Post({id, profilePic, username, timestamp, message}) {
 const deletepost = () => {
  db.collection('posts').doc(id).delete();

 }
 
  return (
    <div className="post">
     <div className="post__top">
          <div className="post__topleft">
           <div className="post__topleftavatar">
            <Avatar src={profilePic} />
           </div>
            <div className="post__toplefttitle">
             <div className='post__toptitlemain'><h3>{username}</h3><span className='Dot'>·</span><span style={{color: 'gray'}}>You</span></div> 
            <div className='post__toplefttime'>{timestamp ? (
            <p>{new Date(timestamp.toDate()).toUTCString()}</p>) : ( <CircularProgress size="1rem" /> )}<span className='Dot'>·</span><Public  style={{color : 'gray'}}/></div> 
            </div>
          </div>
          <div className="post__topright">
          <Tooltip title="Delete">
  <IconButton onClick={deletepost}>
    <Delete />
  </IconButton>
</Tooltip>

          </div>
     </div>
     <div className="post__mid">
       {message}
     </div>
     <div className="post__bottom">
       <Button  style={{color : 'gray'}} startIcon={<ThumbUp />}>Like</Button>
      <Button style={{color : 'gray'}} startIcon={<Comment />}>Comment</Button>
      <Button  style={{color : 'gray'}} startIcon={<Repeat />}>Repost</Button>
      <Button style={{color : 'gray'}} startIcon={<Send />}>Send</Button>
     </div>
    </div>
  )
}

export default Post