import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const VerEsculturas = () => {
    const esculturas = ['Simpleza', 'Amor', 'Peligro']; // Lista de esculturas a mostrar
    const navigate = useNavigate();

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
                    Ver Esculturas - Luis Bernardi
                </Typography>

                <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    {esculturas.map((escultura, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                backgroundColor: '#e0e0e0',
                                marginBottom: 1,
                                borderRadius: '8px',
                                padding: '10px 16px',
                            }}
                        >
                            <ListItemText primary={escultura} />
                        </ListItem>
                    ))}
                </List>

                {/* Botón de Atrás */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
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
                            '&:hover': { backgroundColor: '#1565c0' },
                        }}
                    >
                        Atrás
                    </Button>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default VerEsculturas;
