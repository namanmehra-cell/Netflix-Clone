import React, { useState } from 'react';
import './signin.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './fire';

import { createUserWithEmailAndPassword } from 'firebase/auth';




function SignIn() {

const [register,setRegister] = useState("")
const [registerPass,setRegisterPass] = useState("")



  function reg(event){
  event.preventDefault();
  createUserWithEmailAndPassword(auth,register,registerPass).catch((e)=>{alert('Please fill your credentials')})
  }

function signIn(event){
  event.preventDefault();
  signInWithEmailAndPassword(auth,register,registerPass).catch((e)=>{alert('No user found')})
  }


  return <div className='signin_page'>
      <h2>Sign In</h2>
      <form>
        <input onChange={(event)=>{setRegister(event.target.value)}} value={register} type='email' placeholder='Email'></input>
        <input onChange={(event)=>{setRegisterPass(event.target.value)}} value={registerPass} type='password'placeholder='Password' ></input>
        <button onClick={signIn}  className='signIn_button' >Sign In</button>
        <span>New to Netflix? <span className='sign_up' onClick={reg} >Sign Up now</span></span>
      </form>
  </div>;
}

export default SignIn;
