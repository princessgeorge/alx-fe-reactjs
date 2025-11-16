import React, { createContext, useState } from 'react';

// Initialize the UserContext
export const UserContext = createContext();

// Optional: Create a provider component for easier usage
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
