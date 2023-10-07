import React, { useState } from 'react';
import { useAuth } from './auth';
import { NavLink, useNavigate } from 'react-router-dom';

const EditDetails = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState(auth.user ? auth.user.password : '');
  const [email, setEmail] = useState(auth.user ? auth.user.email : '');
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdateDetails = () => {
    // Assuming you have a function in your auth context to update user details
    auth.updateUserDetails({ password, email });
    setSuccessMessage('Details updated successfully!');
  };

  return (
    <div>
      <div className="container bg-warning py-2">
        <h1>Edit Your Details</h1>
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        <div className="user-info">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="btn btn-primary d-flex justify-content-center"
            onClick={handleUpdateDetails}
          >
            Update Details
          </button>
          
          <NavLink to="/profile" className="btn-login">
            Back to Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
