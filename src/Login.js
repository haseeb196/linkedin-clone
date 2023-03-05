import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {useStateValue} from './StateProvider'
import { auth, provider } from './firebase'
import {actionTypes} from './reducer'

function Login() {
const [state, dispatch] = useStateValue();


  const SignIn = () => {
  auth.signInWithPopup(provider)
  .then(result => {
   dispatch({
      type : actionTypes.SET_USER,
      user : result.user
   })
  }).catch((error) => alert(error.message))
  }
   
  return (
    <div className="login">
      <div className="login__logo">
         <img src="/linkedin-brand.png" alt='' />
      <Button onClick={SignIn} style={{backgroundColor : '#1778F2', color : 'white !important'}}>Sign In</Button>
      </div>
    </div>
  )
}

export default Login