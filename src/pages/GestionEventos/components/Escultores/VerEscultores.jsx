import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';
import { getEventoPorId } from '../../../../api/eventos.routes';

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
    const [escultores, setEscultores] = useState([]);
    const [eventoName, setEventoName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarEvento = async () => {
            try {
                const data = await getEventoPorId(id);
                setEscultores(data.sculptors || []); // Asignamos los escultores asociados al evento
                setEventoName(data.name); // Asignamos el nombre del evento
            } catch (error) {
                setError('No se pudieron cargar los escultores.');
            }
        };
        cargarEvento();
    }, [id]);

    // Función para manejar la navegación al hacer click en el botón de QR
    const handleQrClick = (idEscultor) => {
        navigate(`/${id}/${idEscultor}/qr`);
    };

    if (error) {
        return (
            <Typography variant="h6" color="error" sx={{ textAlign: 'center', mt: 4 }}>
                {error}
            </Typography>
        );
    }

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
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Ver Escultores - {eventoName}
                </Typography>

                {escultores.length === 0 ? (
                    <Typography variant="h6" textAlign="center" color="textSecondary" sx={{ mt: 4 }}>
                        Este evento no tiene escultores asociados.
                    </Typography>
                ) : (
                    <List sx={{ width: '350px', margin: '0 auto' }}>
                        {escultores.map((escultor) => (
                            <ListItem
                                key={escultor._id}
                                sx={{
                                    backgroundColor: '#e0e0e0',
                                    marginBottom: 1,
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '10px 16px',
                                }}
                            >
                                <ListItemText
                                    primary={truncateText(escultor.name || escultor, 40)}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleQrClick(escultor._id)}
                                    sx={{ marginLeft: 'auto' }}
                                >
                                    QR
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                    <BackButton sx={{ width: '48%' }} />
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default VerEscultores;
