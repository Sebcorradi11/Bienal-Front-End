import React from 'react';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import { Box, Container, Button, useMediaQuery, useTheme, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Icono de flecha
import CrearEventoButton from './components/EventoButton';
import FiltrosFecha from './components/FiltrosFecha';
import BuscadorEvento from './components/BuscadorEvento';
import ListaEventos from './components/ListaEventos';
import { useNavigate } from 'react-router-dom'; // Hook para navegación

const GestionarEventos = () => {
    const theme = useTheme(); // Detecta el tema y breakpoints
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantalla pequeña
    const navigate = useNavigate(); // Hook para navegar

    const handleAtras = () => {
        navigate(-1); // Navega a la página anterior
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderPublic />

            <Container sx={{ mt: 4, flexGrow: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row', // Responsivo
                        alignItems: 'center',
                        gap: 2,
                        mb: 3,
                    }}
                >
                    {/* Crear Evento a la izquierda o arriba en pantallas pequeñas */}
                    <Box
                        sx={{
                            flex: 1,
                            width: isSmallScreen ? '100%' : 'auto',
                            display: 'flex',
                            justifyContent: isSmallScreen ? 'center' : 'flex-start',
                        }}
                    >
                        <CrearEventoButton />
                    </Box>

                    {/* Filtros Fecha en el centro */}
                    <Box
                        sx={{
                            flex: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: isSmallScreen ? '100%' : 'auto',
                        }}
                    >
                        <FiltrosFecha />
                    </Box>

                    {/* Buscador a la derecha o debajo en pantallas pequeñas */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: isSmallScreen ? 'center' : 'flex-end',
                            width: isSmallScreen ? '100%' : 'auto',
                        }}
                    >
                        <BuscadorEvento />
                    </Box>
                </Box>
                <ListaEventos />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 4,
                        mb: 2,
                    }}
                >
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleAtras}
                        sx={{
                            height: '50px',
                            width: '200px',
                            borderRadius: '25px',
                            backgroundColor: '#1976d2',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            },
                        }}
                    >
                        Atrás
                    </Button>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
};

export default GestionarEventos;
