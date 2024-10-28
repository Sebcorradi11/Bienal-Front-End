// src/routes/PublicRoute.jsx
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.user);
  return !isAuthenticated || role !== 'admin' ? children : <Navigate to="/adminPanel" />;
};

export default PublicRoute;
