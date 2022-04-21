import React, {useEffect} from 'react';
import './App.css';
import Homescreen from './Homescreen';
import ProfileScreen from './ProfileScreen';
import Login from './login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { auth } from './fire';
import {useDispatch,useSelector} from 'react-redux'
import {logout,login,selectUser} from './features/userSlice'


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
   const log =  auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            uid:userAuth.uid,
            email:userAuth.email
          })
        )
        console.log(userAuth);
        
      }else{
        dispatch(logout());
      }
    });
    return log;
  },[dispatch])


  return (
  <div>

<Router>
  {
    !user ? (<Login/>) : (<Routes>
      <Route exact path="/profile" element = {<ProfileScreen/>} />
    <Route exact path="/" element = {<Homescreen/>} />
   
  </Routes>)
  }

</Router>

</div>
);
}

export default App;
