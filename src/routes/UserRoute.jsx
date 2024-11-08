// src/routes/UserRoute.jsx
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRedirectPath } from '../store/redirectSlice';

const UserRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated  } = useSelector((state) => state.user);
  console.log('entro al coso con el authenticated: ', isAuthenticated)
  if (!isAuthenticated) {
    console.log(location.pathname)
    dispatch(setRedirectPath(location.pathname)); // Guarda la ruta previa
    return <Navigate to="/login" />;
  }
  return children;
};

export default UserRoute;
