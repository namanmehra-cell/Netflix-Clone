import React from 'react';
import './profile.css'
import Navbar from './Navbar';
import Plan from './Plan';
import {auth} from './fire'
import {selectUser} from './features/userSlice'
import {useSelector} from 'react-redux'


function ProfileScreen() {
    let user  = useSelector(selectUser)
    return <div className='profile'>
        <Navbar/>
        <div className='profile_body_div'>
            <h1>Edit Profile</h1>
            
            <div className="profileScreen_info">
<img src='https://archive.org/download/profiles_202104/default.png' alt=''/>
<div className="profilescreen_details">
   <h2>{user.email}</h2> 
   <div className="profileScreen_plans">
       <h3>Plans</h3>
       <hr></hr>
        <Plan/>
       <button onClick={()=>{auth.signOut()}} className='profile_signout'>Sign out</button>
   </div>
</div>
            </div>
            


        </div>
    </div>;
    }   

export default ProfileScreen;
