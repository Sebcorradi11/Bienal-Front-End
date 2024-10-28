// src/routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.user);

  return isAuthenticated && role === 'admin' ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
