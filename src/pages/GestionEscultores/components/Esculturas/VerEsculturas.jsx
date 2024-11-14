import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';
import { useParams } from 'react-router-dom';
import { getEscultorPorId } from '../../../../api/Sculptores/sculptoresApi';

const VerEsculturas = () => {
    const { id } = useParams();
    const [esculturas, setEsculturas] = useState([]);
    const [escultorName, setEscultorName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarEscultor = async () => {
            try {
                const data = await getEscultorPorId(id);
                setEsculturas(data.works || []); // Asignamos las esculturas asociadas
                setEscultorName(data.name); // Asignamos el nombre del escultor
            } catch (error) {
                setError('No se pudieron cargar las esculturas.');
            }
        };
        cargarEscultor();
    }, [id]);

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
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
                    Ver Esculturas - {escultorName}
                </Typography>

                {esculturas.length === 0 ? (
                    <Typography variant="h6" textAlign="center" color="textSecondary" sx={{ mt: 4 }}>
                        Este escultor no tiene esculturas.
                    </Typography>
                ) : (
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
                                <ListItemText primary={escultura.name || escultura} />
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

export default VerEsculturas;
