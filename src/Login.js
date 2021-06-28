import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css'
import {login} from './features/userSlice'
import {useDispatch} from 'react-redux';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [photoUrl,setPhotoUrl] = useState('');
    const dispatch = useDispatch();


    const register = ()=>{   
        if(!name){
            return alert('Please enter a full name');
        }else{
            auth.createUserWithEmailAndPassword(email,password)
            .then((userAuth)=>{
                //register User
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL:photoUrl,
                })
                //login User
                .then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoUrl:photoUrl,
                    }));
                })
            }).catch(error=>alert(error.message)); 
        }               
    };
    const loginToApp =(e)=>{
        e.preventDefault();
        console.log('logged in');
        
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            }))
        }).catch(error=>alert(error));
    };
    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-linkedin_Logo.svg__1.png" alt="" />
            <form >
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Full name (required if registering)'/>
                <input value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} placeholder='profile pic URL (optional)' type="text" />    
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="email" name="" id="" />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>       
    )
}

export default Login
