// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Importa Redux Provider
import { ThemeProvider, CssBaseline } from '@mui/material'; // MUI ThemeProvider y CssBaseline
import App from './App.jsx';
import theme from './theme'; // Importa el tema personalizado
import store from './store'; // Importa el store de Redux


// Fuentes Roboto para la tipografía de Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Renderiza la aplicación con Redux, Theme y StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Provee el store de Redux a toda la app */}
      <ThemeProvider theme={theme}> {/* Aplica el tema global */}
        <CssBaseline /> {/* Normaliza los estilos */}
        <App /> {/* Renderiza la aplicación principal */}
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
