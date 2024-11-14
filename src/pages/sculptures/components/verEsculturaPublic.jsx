import React, { useEffect, useState } from 'react';
import { Grid, Typography, IconButton, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEsculturaPorId } from '../../../api/sculptures.routes';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import fondoBoton from '../../../assets/fondobutton/Rectangle 32.svg';
import { Helmet } from 'react-helmet-async';
import LoaderSpinner from '../../../components/LoaderSpinner';

const VerEsculturaPublic = () => {
    const { id } = useParams();
    const [escultura, setEscultura] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Estado de carga
    const navigate = useNavigate();

    // URL base para generar el enlace a compartir
    const frontUrl = import.meta.env.VITE_FRONT_URL;
    const compartirEnlace = `${frontUrl}/ver-escultura-public/${id}`;

    // Funciones para compartir en redes sociales
    const compartirWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(compartirEnlace)}`;
        window.open(url, '_blank');
    };

    const compartirInstagram = () => {
        window.open('https://www.instagram.com/', '_blank');
    };

    const compartirTwitter = () => {
        const url = `https://twitter.com/share?url=${encodeURIComponent(compartirEnlace)}&text=¡Mira esta escultura en la Bienal!`;
        window.open(url, '_blank');
    };

    const copiarVinculo = () => {
        navigator.clipboard.writeText(compartirEnlace).then(() => {
            alert('¡Enlace copiado al portapapeles!');
        }).catch((error) => {
            console.error('Error al copiar el enlace:', error);
        });
    };

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
                setLoading(false); // Finalizar carga al obtener la escultura
            } catch (error) {
                setError('No se pudo cargar la escultura.');
                setLoading(false); // Finalizar carga en caso de error
            }
        };
        cargarEscultura();
    }, [id]);

    if (loading) {
        return <LoaderSpinner loading={loading} size={60} color="#000" />;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <Grid container direction="column" sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
            {/* Meta Tags dinámicos para redes sociales */}
            <Helmet>
                <title>{`Bienal 2024 - Escultura: ${escultura.name}`}</title>
                <meta property="og:title" content={`Bienal 2024 - Escultura: ${escultura.name}`} />
                <meta property="og:description" content={escultura.description} />
                <meta property="og:url" content={compartirEnlace} />
                <meta property="og:image" content={escultura.imagenPrincipal || 'https://via.placeholder.com/350'} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_AR" />
                <meta property="og:site_name" content="Bienal 2024" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Bienal 2024 - Escultura: ${escultura.name}`} />
                <meta name="twitter:description" content={escultura.description} />
                <meta name="twitter:image" content={escultura.imagenPrincipal || 'https://via.placeholder.com/350'} />
                <meta name="twitter:url" content={compartirEnlace} />
            </Helmet>
            
            <HeaderPublic />

            <Grid container spacing={6} justifyContent="center" alignItems="flex-start" sx={{ flexGrow: 1, px: { xs: 3, md: 8 }, py: 6, width: '100%' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
                        Escultura: {escultura.name}
                    </Typography>

                    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>Descripción:</Typography>
                    <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem' }}>{escultura.description}</Typography>

                    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>Fecha de Creación:</Typography>
                    <Typography variant="body1" sx={{ mb: 5, fontSize: '1.2rem' }}>
                        {formatearFecha(escultura.creation_date)}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <Grid container direction="column" alignItems="center" sx={{ gap: '16px' }}>
                        <Grid item>
                            <img
                                src={escultura.imagenPrincipal || 'https://via.placeholder.com/350'}
                                alt="Imagen de la escultura"
                                style={{ width: '100%', maxWidth: '350px', height: 'auto', borderRadius: '8px' }}
                            />
                        </Grid>

                        <Grid item sx={{ mt: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Compartí</Typography>
                            <Typography variant="h5" component="span" sx={{ fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', fontWeight: 'bold' }}>
                                Bienal 2024
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Grid container spacing={1} justifyContent="center">
                                <IconButton onClick={compartirWhatsApp} color="inherit" sx={{ fontSize: '2.5rem' }}>
                                    <WhatsAppIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton onClick={compartirInstagram} color="inherit" sx={{ fontSize: '2.5rem' }}>
                                    <InstagramIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton onClick={compartirTwitter} color="inherit" sx={{ fontSize: '2.5rem' }}>
                                    <TwitterIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton onClick={copiarVinculo} color="inherit" sx={{ fontSize: '2.5rem' }}>
                                    <LinkIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent="space-between" alignItems="center" sx={{ backgroundColor: '#000', color: '#fff', p: { xs: 2, md: 4 }, mt: 6, textAlign: { xs: 'center', md: 'left' }, width: '100%', borderRadius: '0' }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" component="span" sx={{ fontWeight: 400, fontSize: '2rem', display: 'block' }}>
                        Conocé a los escultores presentados en la Bienal del Chaco 2024.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                    <Button
                        onClick={() => navigate(`/escultores`)}
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
                            '&:hover': { opacity: 0.9 },
                        }}
                    >
                        Ver Más
                    </Button>
                </Grid>
            </Grid>

            <Footer sx={{ mt: 4, py: 2, fontSize: '0.8rem', width: '100%', backgroundColor: '#000', color: '#fff', borderRadius: '0' }} />
        </Grid>
    );
};

export default VerEsculturaPublic;