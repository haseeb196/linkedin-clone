 import { Article, CalendarToday, Photo, SmartDisplay } from '@mui/icons-material'
 import { Avatar, Button } from '@mui/material'
 import React, { useState } from 'react'
 import './MessageSender.css'
 import firebase from 'firebase/compat/app';
 import db from './firebase';
 import { useStateValue } from './StateProvider';

function MessageSender() {
  const [input, setInput] = useState("")
   const [{user}, dispatch] = useStateValue();

 const handleSubmit = (e) => {
  e.preventDefault();

  if(input === '') { alert("Enter a Message") }
else {
  db.collection('posts').add({
    message : input,
    timestamp : firebase.firestore.FieldValue.serverTimestamp(),
    profilePic : user.photoURL,
    username : user.displayName
   })
  
     setInput("");
}

 
 }

  return (
    <div className="messageSender">
 
      <div className="messageSender__top">
      <Avatar src={user.photoURL} /> 
      <form> 
        <input className='messageSender__input' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Start a post' />
        <button onClick={handleSubmit}  type='submit' className='submitbtn'>
        Hidden Button
        </button>
        </form>
       
      </div>
      <div className="messageSender__bottom">
      <Button variant="text" className='btn1' startIcon={<Photo />}><span style={{color: 'gray'}}>Photo</span></Button>
      <Button variant="text" className='btn2' startIcon={<SmartDisplay />}><span style={{color: 'gray'}}>Video</span></Button>
      <Button variant="text" className='btn3' startIcon={<CalendarToday />}><span style={{color: 'gray'}}>Event</span></Button>
      <Button variant="text" className='btn4' startIcon={<Article />}><span style={{color: 'gray'}}>Write article</span></Button>
       </div>
    </div>
  )
}

export default MessageSender