import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getEsculturaPorId } from '../../../api/sculptures.routes';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import BackButton from '../../../components/BackButton';

const VerEscultura = () => {
    const { id } = useParams();
    const [escultura, setEscultura] = useState(null);
    const [error, setError] = useState(null);

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
                console.error('Error al cargar la escultura:', error);
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
                            Ver Escultura - {escultura.name}
                        </Typography>

                        <Box sx={{ marginBottom: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                <strong>Descripción:</strong> {escultura.description}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Fecha de Creación:</strong> {formatearFecha(escultura.creation_date)}
                            </Typography>
                        </Box>

                        {/* Mostrar imágenes */}
                        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                            {['imagenPre', 'imagenDurante', 'imagenPost'].map((key, index) => (
                                <Grid item xs={12} sm={4} key={index}>
                                    <Box
                                        sx={{
                                            border: '2px dashed #aaa',
                                            borderRadius: '8px',
                                            width: '100%',
                                            height: '300px',           // Altura fija del contenedor
                                            overflow: 'hidden',        // Oculta cualquier parte de la imagen que se salga del contenedor
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: 1,
                                        }}
                                    >
                                        <img
                                            src={`${escultura[key]}?t=${new Date().getTime()}` || 'https://via.placeholder.com/300'} // Muestra la imagen con recarga forzada o un placeholder
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
