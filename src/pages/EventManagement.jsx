import React from 'react';
import { Box, Button, Container, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import { Add, Delete, AccountCircle, History, AutoFixHigh } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const GestionEventos = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1 }}>

                <Container maxWidth="md" sx={{ mt: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 4 }}>
                        <Button variant="contained" color="success" startIcon={<Add />} onClick={() => navigate('/add-event')}>
                            Agregar Evento
                        </Button>
                        <Button variant="contained" color="error" startIcon={<Delete />}>
                            Eliminar Eventos
                        </Button>
                        <Button variant="contained" color="secondary" startIcon={<AutoFixHigh />}>
                            Modificar Eventos
                        </Button>
                        <Button variant="contained" color="primary" startIcon={<History />}>
                            Historial de Eventos
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default GestionEventos;
