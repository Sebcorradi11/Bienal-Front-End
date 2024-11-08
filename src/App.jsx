// src/App.jsx

import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { RoutesNavigation } from './routes/routes'; // Archivo de rutas
import themeCustom from './theme';
import configureInterceptors from './api/interceptor';
import useAuthStateListener from './auth/useAuthStateListener';
import LoaderSpinner from './components/LoaderSpinner';
import { useState } from 'react';

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

  // Configuración del interceptor
  // configureInterceptors();

  const [isLoading, setLoading] = useState(false);
  useAuthStateListener(setLoading);
   console.log("isLoading", isLoading)
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeCustom}>
        {isLoading &&<LoaderSpinner></LoaderSpinner>}
      
        <RoutesNavigation />
      </ThemeProvider>
    </QueryClientProvider>
  );
 
}

export default App;