import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserDetails = () => {
  const userData = useContext(UserContext);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Age:</strong> {userData.age}</p>
    </div>
  );
};

export default UserDetails;
