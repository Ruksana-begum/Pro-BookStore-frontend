import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {useAuth} from "./auth"
import {BsFillPersonFill} from "react-icons/bs"
import './Navbar.css'
const Navbar = () =>{
 const auth = useAuth();
    return (
      <div>
         <nav className="header">
        <h1>Lets Study!</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/all-books">Bookstore</NavLink>
        {/* <NavLink to="/cart">Cart</NavLink> */}
        <NavLink to="/books">Add Books</NavLink>
        <span>
        {!auth.user && <NavLink to="/login">My Account</NavLink>}
        <BsFillPersonFill size={22} color="orange"/>
        </span>
        </nav>
      </div>
    );
  };
  export default Navbar


