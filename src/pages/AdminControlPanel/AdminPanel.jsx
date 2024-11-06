import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderPublic';
import Footer from '../../components/Footer';

const AdminControlItem = ({ title, path, onNavigate }) => (
    <Grid item xs={12} sm={6} md={3}>
        <Paper
            elevation={6}
            sx={{
                height: 150,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: 5,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
            }}
            onClick={() => onNavigate(path)}
        >
            <Typography variant="h6">{title}</Typography>
        </Paper>
    </Grid>
);

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

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', px: 4 }}>
                <Grid container spacing={4} justifyContent="center">
                    <AdminControlItem title="Gestionar Eventos" path="/gestionar-eventos" onNavigate={handleNavigation} />
                    <AdminControlItem title="Gestionar Esculturas" path="/gestionar-esculturas" onNavigate={handleNavigation} />

                    <AdminControlItem title="Gestionar Escultores" path="/gestionar-escultores" onNavigate={handleNavigation} />

                    <AdminControlItem title="Gestionar Usuarios" path="/gestionar-usuarios" onNavigate={handleNavigation} />
                </Grid>
            </Box>

            <Footer />
        </Box>
    );
};

export default AdminControlPanel;
