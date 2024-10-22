import React from 'react';
import { Box, Typography, Grid, Paper, IconButton, AppBar, Toolbar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const HomeAdmin = () => {
    const userName = "nombreusuario"; // Este valor podría venir del backend o de un contexto global
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path); // Redirige a la ruta correspondiente
    };

    return (
        <>
            <Header />
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>


                {/* Contenido principal: Tarjetas de gestión */}
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', px: 4 }}>
                    <Grid container spacing={4} justifyContent="center">
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
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                                onClick={() => handleNavigation('/gestionar-eventos')}
                            >
                                <Typography variant="h6">GESTIONAR EVENTOS</Typography>
                            </Paper>
                        </Grid>

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
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                                onClick={() => handleNavigation('/gestionar-esculturas')}
                            >
                                <Typography variant="h6">GESTIONAR ESCULTURAS</Typography>
                            </Paper>
                        </Grid>

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
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                                onClick={() => handleNavigation('/gestionar-escultores')}
                            >
                                <Typography variant="h6">GESTIONAR ESCULTORES</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default HomeAdmin;
