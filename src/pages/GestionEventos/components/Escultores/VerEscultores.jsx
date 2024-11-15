import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';
import { useParams } from 'react-router-dom';
import { getEventoPorId } from '../../../../api/eventos.routes';

const VerEscultores = () => {
    const { id } = useParams();
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
                    <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                        {escultores.map((escultor, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    backgroundColor: '#e0e0e0',
                                    marginBottom: 1,
                                    borderRadius: '8px',
                                    padding: '10px 16px',
                                }}
                            >
                                <ListItemText primary={escultor.name || escultor} />
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
