// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0B3D91',  // Azul oscuro (cabecera y enlaces principales)
            contrastText: '#fff',  // Texto blanco para cabecera y botones primarios
        },
        secondary: {
            main: '#FF4081',  // Rosa vibrante para botones y acentos
            contrastText: '#fff',
        },
        background: {
            default: '#F4F4F4',  // Fondo claro de la página
            paper: '#FFFFFF',  // Fondo blanco para tarjetas y contenedores
        },
        text: {
            primary: '#212121',  // Texto principal en negro
            secondary: '#757575',  // Texto secundario en gris oscuro
        },
        error: {
            main: '#FF0000',  // Texto rojo para errores
        },
        warning: {
            main: '#FFC107',  // Texto amarillo para advertencias
        },
        info: {
            main: '#2196F3',  // Texto azul para informaciones
        },
        success: {
            main: '#4CAF50',  // Texto verde verde para éxito
        },
    },
    typography: {
        fontFamily: `'Roboto', 'Arial', sans-serif`,
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
            color: '#0B3D91',  // Títulos importantes en azul oscuro
        },
        h2: {
            fontSize: '2.4rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: '1.2rem',
            fontWeight: 400,
            color: '#757575',  // Texto de subtítulo en gris oscuro
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',  // Sin texto en mayúsculas para los botones
            fontWeight: 600,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0B3D91',  // Fondo de la barra de navegación
                    boxShadow: 'none',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',  // Botones con esquinas redondeadas
                    padding: '10px 20px',
                    textTransform: 'none',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: '20px',
                    paddingBottom: '20px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '20px',
                    borderRadius: '0px',
                },
            },
        },
    },
});

export default theme;
