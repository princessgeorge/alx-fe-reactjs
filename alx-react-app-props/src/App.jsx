import React from 'react';
import { UserContext } from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    age: 25,
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
