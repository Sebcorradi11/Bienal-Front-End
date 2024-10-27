// src/App.jsx
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { RoutesNavigation } from './routes/routes'; // Importamos el nuevo archivo de rutas
import themeCustom from './theme'; // Tema personalizado

// Configurar react-query
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
  // Inicializamos el interceptor para todas las peticiones  (habilitar cuando esten las cookies)
  //    setUpInterceptors(); 

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeCustom}>
        <RoutesNavigation />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
