import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';

// Función para truncar texto
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

const VerEscultores = () => {
    const { id } = useParams(); // Captura el id del evento desde la URL
    const navigate = useNavigate();

    // Mock de escultores con id y nombre
    const escultores = [
        { id: '6735924de6a4d6689e7da152', nombre: 'Luis Bernardi' },
        { id: '6736b3f6c017c913c54802b4', nombre: 'Deyverson Silva' },
        { id: '6736d81a01d03731e9cf4463', nombre: 'Billy Lee' },
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2.4rem' },
                        fontWeight: 'bold',
                        mb: 4,
                        wordBreak: 'break-word', // Rompe el texto largo
                    }}
                >
                    Ver Escultores - Bienal {truncateText(id, 10)} {/* Trunca el id si es muy largo */}
                </Typography>

                <List sx={{ width: '100%', maxWidth: 600 }}>
                    {escultores.map((escultor) => (
                        <ListItem
                            key={escultor.id}
                            sx={{
                                backgroundColor: '#e0e0e0',
                                marginBottom: 2,
                                borderRadius: '8px',
                                padding: { xs: 1, md: 2 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 1,
                            }}
                        >
                            <ListItemText
                                primary={escultor.nombre}
                                sx={{
                                    textAlign: { xs: 'center', sm: 'left' },
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                    fontWeight: 'medium',
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleQrClick(escultor.id)}
                                sx={{
                                    width: { xs: '80%', sm: 'auto' },
                                    mt: { xs: 1, sm: 0 },
                                    padding: { xs: '6px 16px', md: '8px 24px' },
                                }}
                            >
                                QR
                            </Button>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 3 }}>
                    <BackButton sx={{ width: { xs: '100%', sm: '48%' } }} />
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default VerEscultores;
