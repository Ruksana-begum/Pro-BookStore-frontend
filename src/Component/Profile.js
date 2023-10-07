// Profile.js

import React from 'react';
import { useAuth } from './auth';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();


  return (
    <div>
              <div className="container bg-warning py-2">

      <h1>Welcome to Your Profile</h1>
      <div className="user-info">
        {auth.user ? (
          <>
            <p>Password: {auth.user.password}</p>
            <p>Email: {auth.user.email}</p>
          </>
        ) : (
          <p>User not authenticated.</p>
        )}
          <br />
          {/* <NavLink to="/all-books" className="text-light">
                <button className="btn btn-danger d-flex justify-content-center" onClick={this.Viewbooks}>View Books</button></NavLink>
<br /> */}
                <button onClick={()=> navigate("/all-books",{replace:true})}>View Books</button>

        <button className="btn btn-success d-flex justify-content-center" onClick={(onLogout)=> navigate("/login",{replace:true})}>Logout</button>

      </div>
    </div>
    </div>
  );
};

export default Profile;
