import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate correctamente
import {
    Box,
    Button,
    Container,
    Typography,
    IconButton,
    AppBar,
    Toolbar,
} from '@mui/material';
import { Add, Delete, AccountCircle, History, AutoFixHigh } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

// Tema personalizado
const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffab91',
            main: '#ff5722',
            dark: '#c41c00',
            contrastText: '#fff',
        },
    },
});

const GestionEventos = () => {
    const [user, setUser] = useState(''); // Estado para el nombre de usuario
    const navigate = useNavigate(); // Hook useNavigate para navegar entre páginas

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Navbar con el nombre del usuario */}
            <AppBar position="static" color="primary">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6">Gestión de Eventos</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>
                            {user || 'Usuario'}
                        </Typography>
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Contenido principal */}
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 4,
                    }}
                >
                    <Typography variant="h3" fontWeight="bold" align="center">
                        Gestión de Eventos
                    </Typography>
                </Box>

                {/* Botones de acción */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<Add />}
                        sx={{ width: '200px' }}
                        onClick={() => navigate('/add-event')} // Redirige al formulario
                    >
                        Agregar Evento
                    </Button>

                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<Delete />}
                        sx={{ width: '200px' }}
                    >
                        Eliminar Eventos
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AutoFixHigh />}
                        sx={{ width: '200px' }}
                    >
                        Modificar Eventos
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<History />}
                        sx={{ width: '200px' }}
                    >
                        Historial de Eventos
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default GestionEventos;
