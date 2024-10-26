// src/routes/PublicRoute.jsx
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = false; // Aquí puedes verificar si el usuario está autenticado (IMPLEMENTAR LOGICA ACA PARA VERIFICAR EL USUARIO LOGEADO O NO)
  return !isAuthenticated ? children : <Navigate to="/admin-panel" />;
};

export default PublicRoute;
