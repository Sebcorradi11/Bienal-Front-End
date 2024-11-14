import React, { useState } from 'react';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import { Box, Container, Button, useMediaQuery, useTheme } from '@mui/material';
import BackButton from '../../components/BackButton';
import ButtonNavigate from '../../components/ButtonNavigate';
import BuscadorEscultor from '../../components/Buscador';
import ListaEscultores from './components/Escultores/ListaEscultores';
import { useNavigate } from 'react-router-dom';

const GestionarEscultores = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const handleFiltrar = (inicio, fin) => {
        setFechaInicio(inicio);
        setFechaFin(fin);
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderPublic />

            <Container sx={{ mt: 4, flexGrow: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row',
                        alignItems: 'center',
                        gap: 2,
                        mb: 3,
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Crear Escultor a la izquierda */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: isSmallScreen ? 'center' : 'flex-start',
                            width: isSmallScreen ? '100%' : 'auto',
                        }}
                    >
                        <ButtonNavigate name="Crear Escultor" route="/crear-escultor" />
                    </Box>

                    {/* Buscador a la derecha */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: isSmallScreen ? 'center' : 'flex-end',
                            width: isSmallScreen ? '100%' : 'auto',
                        }}
                    >
                        <BuscadorEscultor />
                    </Box>
                </Box>

                {/* Lista de escultores con fechas filtradas */}
                <ListaEscultores fechaInicio={fechaInicio} fechaFin={fechaFin} />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 4,
                        mb: 2,
                    }}
                >
                    <BackButton sx={{ width: '48%' }} />
                </Box>
            </Container>

            <Footer />
        </Box>
    );
};

export default GestionarEscultores;