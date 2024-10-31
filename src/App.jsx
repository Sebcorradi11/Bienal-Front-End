// src/App.jsx
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './auth/firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/userSlice';
import Cookies from 'js-cookie';
import { RoutesNavigation } from './routes/routes'; // Archivo de rutas
import themeCustom from './theme'; 
import configureInterceptors from './api/interceptor';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const dispatch = useDispatch();

  // Configuración del interceptor
  configureInterceptors();

  useEffect(() => {
    // Escucha cambios en el estado de autenticación
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        Cookies.set("authToken", token, { secure: false, sameSite: 'Lax' });
        dispatch(login({
          username: user.displayName,
          role: "user", // o el rol específico que tengas en tu base de datos
          picture: user.photoURL,
        }));
      } else {
        dispatch(logout());
        Cookies.remove("authToken");
      }
    });
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeCustom}>
        <RoutesNavigation />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
