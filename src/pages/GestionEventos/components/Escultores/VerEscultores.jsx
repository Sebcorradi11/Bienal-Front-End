import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const VerEscultores = () => {
    const escultores = ['Juan Pérez', 'Luis Bernardi', 'Lucas Giménez']; // Lista fija para ver

    const handleAtras = () => {
        navigate(-1); // Navega a la página anterior
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderPublic />

            <Box
                sx={{
                    flexGrow: 1,
                    padding: { xs: 2, md: 4 },
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Ver Escultores
                </Typography>

                <List>
                    {escultores.map((escultor, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                backgroundColor: '#e0e0e0',
                                marginBottom: 1,
                                borderRadius: '8px',
                            }}
                        >
                            <ListItemText primary={escultor} />
                        </ListItem>
                    ))}
                </List>
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

            <Footer />
        </Box>
    );
};

export default VerEscultores;
