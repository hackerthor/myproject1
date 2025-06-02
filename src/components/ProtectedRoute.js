import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/users", { withCredentials: true })
      .then(() => setIsAuthenticated(true))
      .catch((err) => setIsAuthenticated(false))
  }, []);

  if (isAuthenticated === null) return <Loader />;

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;