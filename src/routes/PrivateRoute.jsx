// src/routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // Aquí puedes verificar si el usuario está autenticado
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
