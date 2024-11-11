// src/routes/routes.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onlyPublicRoute } from './publicRoutes';
import { onlyPrivateRoute } from './privateRoutes';
import PublicRoute from './PublicRoute'; // Protege rutas públicas
import PrivateRoute from './PrivateRoute'; // Protege rutas privadas
import UserRoute from './UserRoute';
import NotFound from '../pages/notFound/NotFound';
import { onlyUserRoute } from './userRoutes';

export const RoutesNavigation = () => {
  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
};

const RouterContainer = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      {onlyPublicRoute.map(({ component: Component, path }) => {
        return (
          <Route
            path={path}
            key={path}
            element={
              <PublicRoute>
                <Component />
              </PublicRoute>
            }
          />
        );
      })}
      
      {/* Rutas privadas */}
      {onlyPrivateRoute.map(({ component: Component, path }) => {
        return (
          <Route
            path={path}
            key={path}
            element={
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            }
          />
        );
      })}

      {/* Rutas del usuario */}
      {onlyUserRoute.map(({ component: Component, path }) => {
        return (
          <Route
            path={path}
            key={path}
            element={
              <UserRoute>
                <Component />
              </UserRoute>
            }
          />
        );
      })}

      {/* Ruta para manejar rutas inexistentes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
