import React, { useEffect, useState } from 'react';
import { Grid, Typography, IconButton, Button, Box } from '@mui/material';
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
import rectangleLine from '../../../assets/Rectangle-2.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerEsculturaPublic = () => {
    const { id } = useParams();
    const [escultura, setEscultura] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
            toast.success('Enlace Copiado al portapapeles.');
        }).catch((error) => {
            console.error('Error al copiar el enlace:', error);
        });
    };

    const formatearFecha = (fecha) => {
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(fecha).toLocaleDateString('es-AR', opciones);
    };

    useEffect(() => {
        const cargarEscultura = async () => {
            try {
                const data = await getEsculturaPorId(id);
                setEscultura(data);
                setLoading(false);
            } catch (error) {
                setError('No se pudo cargar la escultura.');
                setLoading(false);
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
            <ToastContainer />
            {/* Meta Tags dinámicos para redes sociales */}
            <Helmet>
                <title>{`Bienal 2024 - Escultura: ${escultura.name}`}</title>
                <meta property="og:title" content={`Bienal 2024 - Escultura: ${escultura.name}`} />
                <meta property="og:description" content={escultura.description} />
                <meta property="og:url" content={compartirEnlace} />
                <meta property="og:image" content={escultura.imagenPre || 'https://via.placeholder.com/350'} />
            </Helmet>
            
            <HeaderPublic />

            <Grid container spacing={6} justifyContent="center" alignItems="flex-start" sx={{ px: { xs: 3, md: 8 }, py: 6 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
                        {escultura.name}
                    </Typography>

                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                        Por {escultura.sculptor ? escultura.sculptor.name : "Autor desconocido"}
                    </Typography>

                    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>Descripción de la temática:</Typography>
                    <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>{escultura.description}</Typography>

                    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>Fecha de Creación:</Typography>
                    <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                        {formatearFecha(escultura.creation_date)}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <img
                        src={escultura.imagenPre || 'https://via.placeholder.com/300'}
                        alt="Imagen principal de la escultura"
                        style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px', marginBottom: '16px' }}
                    />

                    <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>Compartí "{escultura.name}"</Typography>
                    <Grid container spacing={1} justifyContent="center">
                        <IconButton onClick={compartirWhatsApp} color="inherit">
                            <WhatsAppIcon fontSize="large" />
                        </IconButton>
                        <IconButton onClick={compartirInstagram} color="inherit">
                            <InstagramIcon fontSize="large" />
                        </IconButton>
                        <IconButton onClick={compartirTwitter} color="inherit">
                            <TwitterIcon fontSize="large" />
                        </IconButton>
                        <IconButton onClick={copiarVinculo} color="inherit">
                            <LinkIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            {/* Sección adicional antes de la galería */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ backgroundColor: '#000', color: '#fff', p: { xs: 2, md: 4 }, mt: 6, textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" component="span" sx={{ fontWeight: 400, fontSize: '1.5rem', display: 'block' }}>
                        Conocé a los escultores presentados en la 
                    </Typography>
                    <Typography variant="h6" component="span" sx={{ fontWeight: 600, fontSize: '2.5rem', display: 'block', mt: 1 }}>
            Bienal del chaco 2024
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
                            fontSize: '1rem',
                            borderRadius: '20px',
                            px: 4,
                            py: 1,
                            '&:hover': { opacity: 0.9 },
                        }}
                    >
                        Ver Más
                    </Button>
                </Grid>
            </Grid>

            {/* Galería de Imágenes */}
            <Grid container direction="column" sx={{ px: { xs: 3, md: 8 }, py: 6 }}>
    <Box sx={{ display: 'inline-block', position: 'relative', mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Galería de Imágenes
        </Typography>
        <Box
            sx={{
                position: 'absolute',
                left: 0,
                bottom: -4, // Ajusta la distancia desde el texto
                width: '100%',
                height: '4px', // Grosor de la línea
                backgroundColor: 'black',
                maxWidth: { xs: '50px', sm: '100px', md: '150px' }, // Ancho de la línea en diferentes tamaños de pantalla
            }}
        />
    </Box>

                <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
                    {['Antes', 'Durante', 'Después'].map((label, index) => (
                        <Grid item xs={12} sm={4} key={index} sx={{ textAlign: 'center' }}>
                            <Typography variant="subtitle1" sx={{ mb: 1, color: 'black' }}>{label}</Typography>
                            <Box
                                component="img"
                                src={
                                    index === 0 ? escultura.imagenPre : 
                                    index === 1 ? escultura.imagenDurante : 
                                    escultura.imagenPost
                                }
                                alt={`Imagen ${label}`}
                                sx={{
                                    width: '100%',
                                    maxWidth: '250px',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Footer sx={{ mt: 4, py: 2, fontSize: '0.8rem', width: '100%', backgroundColor: '#000', color: '#fff' }} />
        </Grid>
    );
};

export default VerEsculturaPublic;