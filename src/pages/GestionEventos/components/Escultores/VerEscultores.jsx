import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';

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
                <BackButton sx={{ width: '48%' }} />
            </Box>

            <Footer />
        </Box>
    );
};

export default VerEscultores;
