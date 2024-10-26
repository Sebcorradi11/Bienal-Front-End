import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate para la navegación
import { obtenerEscultor } from '../mockEventos';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import fondoBoton from '../assets/Rectangle 32.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const VerEvento = () => {
    const { id } = useParams(); // Obtiene el ID del evento de la URL
    const [evento, setEvento] = useState(null); // Estado para el evento
    const [error, setError] = useState(null); // Estado para manejar errores
    const navigate = useNavigate(); // Hook para navegar

    useEffect(() => {
        const cargarEvento = async () => {
            try {
                const data = await obtenerEscultor(id);
                setEvento(data);
            } catch (error) {
                setError('No se pudo cargar el evento.');
            }
        };
        cargarEvento();
    }, [id]);

    const handleAtras = () => {
        navigate(-1); // Navega hacia la página anterior
    };

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    if (!evento) {
        return <Typography variant="h6">Cargando evento...</Typography>;
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
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: '80vh' }}
                >
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography variant="h4" gutterBottom textAlign="center">
                            Ver Evento - {evento.nombre}
                        </Typography>

                        <Box sx={{ marginBottom: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                <strong>Fecha del Evento:</strong> {evento.fecha}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Lugar del Evento:</strong> {evento.lugar}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Descripción del Evento:</strong> {evento.descripcion}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '2px dashed #aaa',
                                borderRadius: '8px',
                                width: { xs: '100%', sm: '300px' },
                                height: '300px',
                                overflow: 'hidden',
                                margin: '0 auto',
                            }}
                        >
                            <img
                                src={evento.imagen || 'https://via.placeholder.com/300'}
                                alt="Imagen del evento"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>

                        <Button
                            fullWidth
                            sx={{
                                marginTop: 3,
                                height: '60px',
                                borderRadius: '30px',
                                backgroundImage: `url(${fondoBoton})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {
                                    opacity: 0.9,
                                },
                            }}
                        >
                            <Typography variant="h6">Escultores</Typography>
                        </Button>

                        {/* Botón Atrás */}
                        <Button
                            startIcon={<ArrowBackIcon />}
                            onClick={handleAtras}
                            variant="outlined"
                            color="primary"
                            fullWidth
                            sx={{
                                marginTop: 2,
                                height: '50px',
                                borderRadius: '25px',
                                textTransform: 'none',
                            }}
                        >
                            Atrás
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </Box>
    );
};

export default VerEvento;
