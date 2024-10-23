import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
                            onClick={() => handleNavigation('/gestionar-eventos')}
                        >
                            <Typography variant="h6">Gestionar Eventos</Typography>
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
                                '&:hover': { transform: 'scale(1.05)' },
                            }}
                            onClick={() => handleNavigation('/manage-sculptures')}
                        >
                            <Typography variant="h6">Gestionar Esculturas</Typography>
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
                                '&:hover': { transform: 'scale(1.05)' },
                            }}
                            onClick={() => handleNavigation('/manage-sculptors')}
                        >
                            <Typography variant="h6">Gestionar Escultores</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </Box>
    );
};

export default AdminControlPanel;
