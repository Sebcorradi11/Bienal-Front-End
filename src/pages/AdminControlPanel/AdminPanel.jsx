import React from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import fondoBoton from '../../assets/fondobutton/Rectangle 32.svg';
import Header from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import AdminControlItem from './components/AdminControlItem';

const AdminControlPanel = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path); // Redirige a la ruta especificada
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

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', px: 4, py: 4 }}>
                <Grid container spacing={4} justifyContent="center">
                    <AdminControlItem title="Gestionar Eventos" path="/gestionar-eventos" onNavigate={handleNavigation} backgroundImage={fondoBoton} />
                    <AdminControlItem title="Gestionar Esculturas" path="/gestionar-esculturas" onNavigate={handleNavigation} backgroundImage={fondoBoton} />
                    <AdminControlItem title="Gestionar Escultores" path="/gestionar-escultores" onNavigate={handleNavigation} backgroundImage={fondoBoton} />
                    <AdminControlItem title="Gestionar Usuarios" path="/gestionar-usuarios" onNavigate={handleNavigation} backgroundImage={fondoBoton} />
                </Grid>
            </Box>

            <Footer />
        </Box>
    );
};

export default AdminControlPanel;
