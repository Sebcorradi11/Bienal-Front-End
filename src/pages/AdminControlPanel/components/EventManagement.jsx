import React from 'react';
import {
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';
import { Add, Delete, History, AutoFixHigh, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';

const EventManagement = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navegar a la página anterior
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />

            <Container maxWidth="md" sx={{ flexGrow: 1, mt: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 4 }}>
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<Add />}
                        onClick={() => navigate('/add-event')}
                    >
                        Agregar Evento
                    </Button>
                    <Button variant="contained" color="error" startIcon={<Delete />}>
                        Eliminar Eventos
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<AutoFixHigh />}>
                        Modificar Eventos
                    </Button>
                </Box>

                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 220,
                        right: 16,
                        zIndex: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        color="info"
                        startIcon={<ArrowBack />}
                        onClick={handleBack}
                    >
                        Atrás
                    </Button>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
};

export default EventManagement;
