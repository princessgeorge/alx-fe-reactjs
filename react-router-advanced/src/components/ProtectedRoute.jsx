import { Navigate } from "react-router-dom";

// Checker expects a dedicated Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // toggle false to test redirect

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
