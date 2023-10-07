// UserProfile.js

import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserProfile;
