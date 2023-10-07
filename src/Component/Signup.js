import React, {useState} from 'react'
import { useAuth } from './auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import './Signup.css'
const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [userBool,setUserBool]=useState('')
    const auth=useAuth()
    const Navigate=useNavigate()
    const handlesignup=(event)=>{
        const userTaken=auth.userlist.some(x=> x.email===email)
        if(userTaken){
            setUserBool(true)
        }
        else{
            auth.signup(email,password,firstName,lastName)
            Navigate('/signupsuccess')

        }
        event.preventDefault()
    }
    const change=(event)=>{
        setEmail(event.target.value)
    }
    const change1=(event)=>{
      setPassword(event.target.value)
    }
  return (
    <div className='container'>
      <form onSubmit={handlesignup}>
      <h3>Create your account</h3>
      {/* <label>FirstName</label> */}
      <input type="text2" className='stxt' placeholder='First Name' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}required/><br></br>
      {/* <label>LastName</label> */}
      <input type="text2" className='stxt' placeholder='Last Name'value={lastName} onChange={(e)=>{setLastName(e.target.value)}}required/><br></br>
      {/* <label>Email</label> */}
      <input type='email'  placeholder='Email' value={email} onChange={change} required/><br></br>
      {/* <label>Password</label> */}
      <input type='password' className='stxt' placeholder='Password' value={password} onChange={change1} required/><br></br>
      {userBool?<p>Email is already Exists</p>:""}
      <button type='submit' id='btn-sub'>Signup</button>
      <h4>Already have an Account</h4>
      {/* <a href='/login' className='btn-login'>Login</a> */}
      <NavLink to="/login" className='btn-login'>Login</NavLink>
   
      </form>
      
    </div>
  )
}

export default Signup;