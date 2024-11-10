import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEsculturaPorId } from '../mock';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import BackButton from '../../../components/BackButton';

const VerEscultura = () => {
    const { id } = useParams();
    const [escultura, setEscultura] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const formatearFecha = (fecha) => {
        const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const fechaLocal = new Date(fecha);
        return new Date(fechaLocal.getUTCFullYear(), fechaLocal.getUTCMonth(), fechaLocal.getUTCDate())
            .toLocaleDateString('es-AR', opciones);
    };

    useEffect(() => {
        const cargarEscultura = async () => {
            try {
                const data = await getEsculturaPorId(id);
                setEscultura(data);
            } catch (error) {
                setError('No se pudo cargar la escultura.');
            }
        };
        cargarEscultura();
    }, [id]);


    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    if (!escultura) {
        return <Typography variant="h6">Cargando escultura...</Typography>;
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
                            Ver Escultura - {escultura.nombre}
                        </Typography>

                        <Box sx={{ marginBottom: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                <strong>Temática:</strong> {escultura.tematica}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Fecha de Creación:</strong> {formatearFecha(escultura.fechaCreacion)}
                            </Typography>
                        </Box>

                        {/* Mostrar imágenes */}
                        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                            {['imagenPreEvento', 'imagenDuranteEvento', 'imagenPostEvento'].map((key, index) => (
                                <Grid item xs={12} sm={4} key={index}>
                                    <Box
                                        sx={{
                                            border: '2px dashed #aaa',
                                            borderRadius: '8px',
                                            width: '100%',
                                            height: '200px',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: 1,
                                        }}
                                    >
                                        <img
                                            src={escultura[key] || 'https://via.placeholder.com/300'}
                                            alt={`Imagen ${key}`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Botón Atrás */}
                        <BackButton sx={{ width: '48%' }} />
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </Box>
    );
};

export default VerEscultura;
