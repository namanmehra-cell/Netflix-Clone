import React, { useState } from 'react';
import './login.css'
import SignIn from './SignIn';


function Login() {
  const [sign,setSign]=  useState(false)

  return (
  <>
 <div className='login'>
   <nav>
      <img className='logo' src='https://tinyurl.com/2ymxcc5r' alt=' ' />
      <button onClick={()=>{setSign(true)}} className='sign_button'>Sign In</button>
  </nav>
  <div className='main_body'>
    {sign ? <SignIn/> : (<> <h1>Unlimited movies, TV shows and more.</h1>
      <h3 className='h3'>Watch anywhere. Cancel anytime.</h3>
      <h3 className='line'>Ready to watch? Enter 
      your email to create pr restart 
      a membership.</h3>
      <div className='form'>
        <form>
          <input className='input' type="email" placeholder='Email Id' ></input>
          <button onClick={()=>{setSign(true)}} className='get_button'>Get Started</button>
        </form>

      </div></>) }
     
  </div>
  </div>
  </>
 ) ;
}

export default Login;
