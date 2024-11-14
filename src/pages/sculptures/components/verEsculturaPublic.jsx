import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEsculturaPorId } from '../../../api/sculptures.routes';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import fondoBoton from '../../../assets/fondobutton/Rectangle 32.svg';

const VerEsculturaPublic = () => {
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
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <HeaderPublic />

            <Box sx={{ flexGrow: 1, p: 4 }}>
                <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
                    {/* Título y Descripción */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: '3rem', mb: 1 }}>
                            Escultura: {escultura.name}
                        </Typography>

                        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Descripción:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {escultura.description}
                        </Typography>

                        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Fecha de Creación:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {formatearFecha(escultura.creation_date)}
                        </Typography>
                    </Grid>

                    {/* Imagen y Botones de Compartir Centrados */}
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        {/* Imagen de la escultura */}
                        <Box
                            component="img"
                            src={escultura.imagenPrincipal || 'https://via.placeholder.com/250'}
                            alt="Imagen de la escultura"
                            sx={{ width: '80%', borderRadius: '8px', mb: 0 }}
                        />

                        {/* Texto de Compartir y Botones de Compartir */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    Compartí
                                </Typography>
                                <Typography variant="h5" component="span" sx={{ fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', fontWeight: 'bold' }}>
                                    {escultura.name}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton color="inherit" sx={{ fontSize: '3rem' }}>
                                    <WhatsAppIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton color="inherit" sx={{ fontSize: '3rem' }}>
                                    <InstagramIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton color="inherit" sx={{ fontSize: '3rem' }}>
                                    <TwitterIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton color="inherit" sx={{ fontSize: '3rem' }}>
                                    <LinkIcon fontSize="inherit" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Sección para ver otras esculturas */}
                <Box sx={{ backgroundColor: '#000', color: '#fff', p: 3, mt: 4, borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: '400', fontFamily: 'bold', mb: 1 }}>
                            Conocé otras esculturas
                        </Typography>
                    </Box>
                    <Button
                        onClick={() => navigate(`/ver-esculturas`)}
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

export default VerEsculturaPublic;
