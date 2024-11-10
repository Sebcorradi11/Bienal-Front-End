import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
// import { getEscultorPorId } from '../../../../api/escultores.routes'; // Cambia la función de la API a la de escultores
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import BackButton from '../../../../components/BackButton';

const VerEscultor = () => {
    const { id } = useParams();
    const [escultor, setEscultor] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarEscultor = async () => {
            try {
                const data = await getEscultorPorId(id); // Llamar a la API para obtener el escultor por ID
                setEscultor(data);
            } catch (error) {
                setError('No se pudo cargar el escultor.');
            }
        };
        cargarEscultor();
    }, [id]);

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    if (!escultor) {
        return <Typography variant="h6">Cargando escultor...</Typography>;
    }
    const handleVerEsculturas = () => {
        navigate('/ver-escultura/:id'); // Navega a la vista de agregar escultores
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
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: '80vh' }}
                >
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography variant="h4" gutterBottom textAlign="center">
                            Ver Escultor - {escultor.nombre} {escultor.apellido}
                        </Typography>

                        <Box sx={{ marginBottom: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                <strong>Nombre:</strong> {escultor.nombre}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Apellido:</strong> {escultor.apellido}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Biografía:</strong> {escultor.biografia}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Contacto:</strong> {escultor.contacto}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Obras Previas:</strong> {escultor.obrasPrevias}
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
                                src={escultor.imagen || 'https://via.placeholder.com/300'}
                                alt="Imagen del escultor"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>

                        <Button
                            fullWidth
                            onClick={handleVerEsculturas}
                            sx={{
                                marginTop: 3,
                                height: '60px',
                                borderRadius: '30px',
                                backgroundImage: `url(${fondoBoton})`,
                                backgroundSize: 'cover',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': { opacity: 0.9 },
                            }}
                        >
                            <Typography variant="h6">Esculturas</Typography>
                        </Button>

                        <BackButton sx={{ width: '48%' }} />
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </Box>
    );
};

export default VerEscultor;
