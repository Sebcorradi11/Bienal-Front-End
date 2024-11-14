import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';
import LoaderSpinner from '../../../../components/LoaderSpinner';

const VerResultados = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [escultores, setEscultores] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [hasData, setHasData] = useState(false); // Estado para verificar si hay datos

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_URL_VOTACION}/resultados/${id}`);
                const data = await response.json();

                if (data && data.length > 0) {
                    // Si hay datos, ordenar de mayor a menor puntaje
                    const escultoresOrdenados = data.sort((a, b) => b.promedioPuntaje - a.promedioPuntaje);
                    setEscultores(escultoresOrdenados);
                    setHasData(true);
                } else {
                    setHasData(false); // Sin datos
                }
            } catch (error) {
                console.error('Error fetching results:', error);
                setHasData(false);
            } finally {
                setLoading(false); // Finalizar carga
            }
        };

        fetchResults();
    }, [id]);

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
                    Resultados de Escultores - Bienal {id}
                </Typography>

                {loading ? (
                    <LoaderSpinner loading={loading} size={60} color="#3f51b5" />
                ) : (
                    hasData ? (
                        <List sx={{ width: '100%', maxWidth: 600 }}>
                            {escultores.map((escultor) => (
                                <ListItem
                                    key={escultor.escultorId}
                                    sx={{
                                        backgroundColor: '#e0e0e0',
                                        marginBottom: 1,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <ListItemText
                                        primary={escultor.escultorNombre}
                                        secondary={`Puntaje promedio: ${escultor.promedioPuntaje.toFixed(2)}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <Typography variant="body1" color="textSecondary" textAlign="center">
                            No hay resultados disponibles para este evento.
                        </Typography>
                    )
                )}
                <BackButton sx={{ width: '48%', marginTop: 2 }} />
            </Box>

            <Footer />
        </Box>
    );
};

export default VerResultados;