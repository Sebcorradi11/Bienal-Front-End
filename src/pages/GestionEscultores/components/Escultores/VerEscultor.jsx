import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEscultorPorId } from '../../../../api/Sculptores/sculptoresApi';
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
                const data = await getEscultorPorId(id);
                setEscultor(data);
                localStorage.setItem('escultor', JSON.stringify(data)); // Guardamos el escultor en localStorage
            } catch (error) {
                setError('No se pudo cargar el escultor.');
            }
        };

        const storedEscultor = JSON.parse(localStorage.getItem('escultor'));
        if (storedEscultor && storedEscultor._id === id) {
            setEscultor(storedEscultor);
        } else {
            cargarEscultor();
        }
    }, [id]);

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    if (!escultor) {
        return <Typography variant="h6">Cargando escultor...</Typography>;
    }

    const handleVerEsculturas = () => {
        navigate(`/ver-esculturas/${id}`);
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
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ minHeight: '80vh' }}>
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography variant="h4" gutterBottom textAlign="center">
                            Ver Escultor - {escultor.name}
                        </Typography>
                        <Box sx={{ marginBottom: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                <strong>Nombre:</strong> {escultor.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Biografía:</strong> {escultor.biography}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>País:</strong> {escultor.country}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Contacto:</strong> {escultor.contactInfo?.email} - {escultor.contactInfo?.phone}
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
                                src={escultor.profileImage || 'https://via.placeholder.com/300'}
                                alt="Imagen del escultor"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                        <Button
                            fullWidth
                            sx={{
                                height: '60px',
                                borderRadius: '30px',
                                backgroundImage: `url(${fondoBoton})`,
                                backgroundSize: 'cover',
                                color: 'white',
                                textTransform: 'none',
                                mb: 2,
                                '&:hover': { opacity: 0.9 },
                                margin: 1,
                            }}
                            onClick={handleVerEsculturas}
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