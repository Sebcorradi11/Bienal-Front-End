import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HomeAdmin = () => {
    const userName = "nombreusuario"; // Este valor puede venir del backend
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path); // Redirige a la ruta correspondiente
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Barra superior con nombre de usuario e icono */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 32px',
                    backgroundColor: '#f5f5f5',
                }}
            >

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 1 }}>{userName}</Typography>
                    <IconButton>
                        <AccountCircle fontSize="large" />
                    </IconButton>
                </Box>
            </Box>

            {/* Contenido principal: Tarjetas de gestión */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 4,
                }}
            >
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                height: 150,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                borderRadius: 5,
                            }}
                            onClick={() => handleNavigation('/gestionar-eventos')}
                        >
                            <Typography variant="h6">GESTIONAR EVENTOS</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                height: 150,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                borderRadius: 5,
                            }}
                            onClick={() => handleNavigation('/gestionar-esculturas')}
                        >
                            <Typography variant="h6">GESTIONAR ESCULTURAS</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                height: 150,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                borderRadius: 5,
                            }}
                            onClick={() => handleNavigation('/gestionar-escultores')}
                        >
                            <Typography variant="h6">GESTIONAR ESCULTORES</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomeAdmin;
