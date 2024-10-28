// src/routes/PublicRoute.jsx
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.user);
  return children;
};

export default PublicRoute;
