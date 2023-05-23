import React from 'react'
import Layout from '../components/Layout/Layout'
import {useState} from "react";
import '../styles/RegisterStyle.css'; 

const Register = () => {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
   }
  return (
    <Layout>
      <>
       <form onSubmit={handleSubmit}  className='abcd'>
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

export default Register