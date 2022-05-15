import React, {useContext } from 'react';
import { useState } from 'react';
import {auth} from '../base';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {AuthContext} from '../Auth';
import { Navigate } from 'react-router';
function Login({history}){
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async(event)=>{
    event.preventDefault();
    try{
    const user = await signInWithEmailAndPassword(auth,email,password);
    console.log(user);
    history.push("/");
    }
    catch(error){
      console.log(error.message)
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/" />;
  }
    return(
    <div>
        <h1>Log in</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input name="email" type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </form>
    </div>
    )
}

export default Login;