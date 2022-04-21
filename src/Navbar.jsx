import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {

  const[showNav,handleNavbar]=useState(false)
  const navigate = useNavigate();

  function handleClick() {
    navigate('/profile');
  }

  function homeClick(){
    navigate('/')
}
  function transition(){
    if(window.scrollY>100){
      handleNavbar(true)
    }
    else{
      handleNavbar(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",transition)
    return ()=>{window.removeEventListener("scroll",transition)} 
  },[])
  return (

    <div className={`${ showNav && 'nav'}`}>
      <div className='nav_container'>
      <img onClick={homeClick} className='logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="The netflix logo" />
      <img onClick={handleClick} className='user_profile' src="https://archive.org/download/profiles_202104/default.png"
       alt="" />
      </div>
      
    </div>
  )

}

export default Navbar;
