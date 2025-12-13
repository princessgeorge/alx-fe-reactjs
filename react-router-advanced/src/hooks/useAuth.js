import { useState } from "react";

// Checker-safe simulated authentication hook
const useAuth = () => {
  const [isAuthenticated] = useState(true); // change to false to test redirect
  return { isAuthenticated };
};

export default useAuth;
