import React, { useState } from 'react';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import BackButton from '../../components/BackButton';
import ButtonNavigate from '../../components/ButtonNavigate';
import Buscador from '../../components/Buscador';
import ListaEscultores from './components/Escultores/ListaEscultores';

const GestionarEscultores = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [searchQuery, setSearchQuery] = useState('');

    const handleBuscar = (query) => {
        setSearchQuery(query);
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

                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: isSmallScreen ? 'center' : 'flex-end',
                            width: isSmallScreen ? '100%' : 'auto',
                        }}
                    >
                        <Buscador onBuscar={handleBuscar} />
                    </Box>
                </Box>

                <ListaEscultores searchQuery={searchQuery} />

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
