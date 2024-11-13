import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEscultorPorId } from '../../../api/Sculptores/sculptoresApi';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import fondoBoton from '../../../assets/fondobutton/Rectangle 32.svg';

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

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <HeaderPublic />

            <Box sx={{ flexGrow: 1, p: 4 }}>
                <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
                    {/* Título y Descripción */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: '3rem', mb: 1 }}>
                            {escultor.name}
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{ fontStyle: 'italic', color: 'gray', fontSize: '2rem', mb: 3 }}>
                            {escultor.country}
                        </Typography>

                        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Biografía:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {escultor.biography}
                        </Typography>

                        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Contacto:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4 }}>
                            {escultor.contactInfo?.email} - {escultor.contactInfo?.phone}
                        </Typography>
                    </Grid>

                    {/* Imagen del escultor */}
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        <Box
                            component="img"
                            src={escultor.profileImage || 'https://via.placeholder.com/250'}
                            alt="Imagen del escultor"
                            sx={{ width: '80%', borderRadius: '8px', mb: 0 }}
                        />
                    </Grid>
                </Grid>

                {/* Botón para ver más esculturas relacionadas */}
                <Box sx={{ backgroundColor: '#000', color: '#fff', p: 3, mt: 4, borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: '400', fontFamily: 'bold', mb: 1 }}>
                            Conocé las esculturas de
                        </Typography>
                        <Typography variant="h5" component="span" sx={{ fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', fontWeight: 'bold' }}>
                            {escultor.name}
                        </Typography>
                    </Box>
                    <Button
                        onClick={() => navigate(`/ver-esculturas/${id}`)}
                        sx={{
                            backgroundImage: `url(${fondoBoton})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            borderRadius: '20px',
                            px: 5,
                            py: 1.5,
                            '&:hover': {
                                opacity: 0.9,
                            },
                        }}
                    >
                        Ver Más
                    </Button>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default VerEscultor;
