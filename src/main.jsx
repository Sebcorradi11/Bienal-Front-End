// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Importamos el ThemeProvider y CssBaseline
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';  // Importamos el theme personalizado

// Fuentes Roboto para la tipografía
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Creamos el root y aplicamos el theme global
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza los estilos */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
