// Login.js

import React, { useState } from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Signup.css';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lis, setLis] = useState(true);
  const change = (event) => {
    setName(event.target.value);
  };

  const change1 = (event) => {
    setEmail(event.target.value);
  };

  const change2 = (event) => {
    setPassword(event.target.value);
  };

  const handlelogin = (event) => {
    auth.userlist.map((x) => {
      if (x.email === email && x.password === password) {
        auth.login(x); // Set the user information upon successful login
        navigate('/loginsuccess');
        setLis(true);
      } else {
        setLis(false);
      }
    });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handlelogin} className='container2'>
        <h3>Login to your account</h3>
        {/* <input type='name' placeholder="Name" value={name} onChange={change} required />
        <br></br> */}
        <input type='email' placeholder="Email" value={email} onChange={change1} required />
        <br></br>
        <input type='password' placeholder='Password' value={password} onChange={change2} required /><br></br>
        <button type="submit" id='btn-sub'>Login</button>
        {!lis ? <p style={{ color: "red", textAlign: "center" }}>Invalid User</p> : ''}
        <h4>Don't have an Account?</h4>
        <NavLink to="/signup" className='btn-login'>Signup</NavLink>
      </form>
      <br></br>
    </div>
  );
}

export default Login;
