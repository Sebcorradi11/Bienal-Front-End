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
    const [loading, setLoading] = useState(true);
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_URL_VOTACION}/resultados/${id}`);
                const data = await response.json();

                if (data && data.length > 0) {
                    const escultoresOrdenados = data.sort((a, b) => b.promedioPuntaje - a.promedioPuntaje);
                    setEscultores(escultoresOrdenados);
                    setHasData(true);
                } else {
                    setHasData(false);
                }
            } catch (error) {
                console.error('Error fetching results:', error);
                setHasData(false);
            } finally {
                setLoading(false);
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
                <Typography
                    variant="h4"
                    textAlign="center"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2.4rem' },
                        fontWeight: 'bold',
                        mb: 4,
                        wordBreak: 'break-word',
                    }}
                >
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
                                        padding: { xs: 1, md: 2 },
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: 1,
                                    }}
                                >
                                    <ListItemText
                                        primary={escultor.escultorNombre}
                                        secondary={`Puntaje promedio: ${escultor.promedioPuntaje.toFixed(2)}`}
                                        primaryTypographyProps={{
                                            fontSize: { xs: '1rem', sm: '1.2rem' },
                                            fontWeight: 'medium',
                                        }}
                                        secondaryTypographyProps={{
                                            fontSize: { xs: '0.9rem', sm: '1rem' },
                                            color: 'text.secondary',
                                        }}
                                        sx={{
                                            textAlign: { xs: 'center', sm: 'left' },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            textAlign="center"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.2rem' },
                                mt: 4,
                            }}
                        >
                            No hay resultados disponibles para este evento.
                        </Typography>
                    )
                )}
                <Box sx={{ width: '100%', maxWidth: 600, mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <BackButton sx={{ width: { xs: '100%', sm: '48%' } }} />
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default VerResultados;
