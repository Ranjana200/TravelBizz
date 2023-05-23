import React from 'react'
import Layout from '../components/Layout/Layout'
import {useState} from "react";
import { Link } from 'react-router-dom';

import '../styles/LoginStyle.css'; 

const Login = () => {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
   }
  return (
    <Layout>
      <Link to="/register">       
        </Link>
      <>
       <form onSubmit={handleSubmit}  className='abc'>
        <label form='email' className='email'>Email:</label>
        <input value={email}  onChange={(e) => setEmail(e.target.value)}placeholder='youremail@gmail.com' id="email" name="email" className='ee'/>
        <label form='password' className='pass'>Password:</label>
        <input value={pass}  onChange ={(e) => setPass(e.target.value)}placeholder='*********' id="password" name="password" className='pp'/>
        <br></br>
        <button type='submit' className='login'>Login</button>
        <br></br>
        <button className='register'>Don't have an account? Register here</button>
       </form>
      
       </>
    </Layout>
  )
}

export default Login