import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';
import { useNavigate } from 'react-router-dom';

const VerEsculturas = () => {
    const esculturas = ['Simpleza', 'Amor', 'Peligro']; // Lista de esculturas a mostrar
    const navigate = useNavigate();

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
                    <BackButton sx={{ width: '48%' }} />
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default VerEsculturas;
