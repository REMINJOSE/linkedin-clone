import React, { useEffect } from 'react';
import Sidebar from './Sidebar'
import './App.css';
import Header from './Header';
import Feed from './Feed';
import { useSelector,useDispatch } from 'react-redux';
import { login,logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
 const user = useSelector(selectUser);

 const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //user is logged in
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }));
      }
      else{
        //use is logged out
        dispatch(logout());
      }
    });
  },[]);

  return (
    <div className="app">      
        <Header/>
      {!user?(
        <Login/>
      ):(     
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            {/*Widgets*/}
            
          </div>
        )
      }              
    </div>
  );
}

export default App;
