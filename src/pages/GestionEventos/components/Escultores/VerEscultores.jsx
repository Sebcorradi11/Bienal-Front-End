import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';

const VerEscultores = () => {
    const { id } = useParams(); // Captura el id del evento desde la URL
    const navigate = useNavigate();

    // Mock de escultores con id y nombre
    const escultores = [
        { id: '1', nombre: 'Luis Bernardi' },
        { id: '2', nombre: 'Deyverson Silva' },
        { id: '3', nombre: 'Billy Lee' },
    ];

    // Función para manejar la navegación al hacer click en el botón de QR
    const handleQrClick = (idEscultor) => {
        navigate(`/${id}/${idEscultor}/qr`);
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
                    Ver Escultores - Bienal {id}
                </Typography>

                <List>
                    {escultores.map((escultor) => (
                        <ListItem
                            key={escultor.id}
                            sx={{
                                backgroundColor: '#e0e0e0',
                                marginBottom: 1,
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ListItemText primary={escultor.nombre} />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleQrClick(escultor.id)}
                                sx={{ marginLeft: 'auto' }}
                            >
                                QR
                            </Button>
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
