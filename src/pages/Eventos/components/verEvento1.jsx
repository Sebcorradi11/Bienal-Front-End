import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, IconButton, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventoPorId } from '../../../api/eventos.routes';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import fondoBoton from '../../../assets/fondobutton/Rectangle 28.svg';

const VerEvento1 = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  {/* AGREGAR RUTA CORRESPONDIENTE*/}
  const compartirEnlace = `/ver-evento-public/:id`; // Cambia esto al enlace real de tu aplicación

  // Función para compartir en WhatsApp
  const compartirWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(compartirEnlace)}`;
    window.open(url, '_blank');
  };

  // Función para compartir en X
  const compartirX = () => {
    const url = `https://twitter.com/share?url=${encodeURIComponent(compartirEnlace)}&text=¡Mira este evento de la Bienal!`;
    window.open(url, '_blank');
  };

  // Función para compartir en Instagram (solo abre el perfil de Instagram, ya que Instagram no permite compartir enlaces directamente a una publicación específica)
  const compartirInstagram = () => {
    window.open('https://www.instagram.com/', '_blank'); // Cambia si tienes un perfil específico
  };

  // Función para copiar el enlace al portapapeles
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
    const cargarEvento = async () => {
      try {
        const data = await getEventoPorId(id);
        setEvento(data);
      } catch (error) {
        setError('No se pudo cargar el evento.');
      }
    };
    cargarEvento();
  }, [id]);

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  if (!evento) {
    return <Typography variant="h6">Cargando evento...</Typography>;
  }

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden', backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
      <HeaderPublic />

      <Grid container spacing={6} justifyContent="center" alignItems="flex-start" sx={{ flexGrow: 1, px: { xs: 3, md: 8 }, py: 6, width: '100%' }}>
        {/* Título y Descripción */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
            Bienal 2024
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontStyle: 'italic',fontSize: { xs: '1.8rem', md: '2.8rem' }, mb: 4 }}>
            {evento.theme}
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>Descripción:</Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem' }}>{evento.description}</Typography>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>Temática:</Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem' }}>{evento.theme_description}</Typography>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>Fechas:</Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem' }}>
            {formatearFecha(evento.date_inicio)} - {formatearFecha(evento.date_fin)}
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>Lugar:</Typography>
          <Typography variant="body1" sx={{ mb: 5, fontSize: '1.2rem' }}>{evento.location}</Typography>
        </Grid>

        {/* Imagen y Botones de Compartir Centrados */}
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Grid container direction="column" alignItems="center" sx={{ gap: '4px' }}>
            <Grid item>
              <img
                src={evento.images[0] || 'https://via.placeholder.com/350'}
                alt="Imagen del evento"
                style={{ width: '200%', maxWidth: '400px' }}
              />
            </Grid>

            <Grid item>
              <Typography  variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center',ml: 15,mt:-5 }}>
                Compartí
              </Typography>
              <Typography variant="h5" component="span" sx={{ fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', fontWeight: 'bold',ml: 15,  }}>
                Bienal 2024
              </Typography>
            </Grid>

            <Grid item sx={{ mt: 1, ml: 15 }}>
              <Grid container spacing={1} justifyContent="center">
                <IconButton onClick={compartirWhatsApp} color="inherit" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  <WhatsAppIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={compartirInstagram} color="inherit" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  <InstagramIcon fontSize="inherit" />
                </IconButton>
                <IconButton  onClick={compartirX} color="inherit" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  <TwitterIcon fontSize="inherit" />
                </IconButton>
                <IconButton  onClick={copiarVinculo} color="inherit"  sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  <LinkIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Sección de Artistas Participantes */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ backgroundColor: '#000', color: '#fff', p: { xs: 2, md: 4 }, mt: 6, textAlign: { xs: 'center', md: 'left' }, width: '100%', borderRadius: '0' }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 400, fontSize: '2rem', display: 'block' }}>
            Conocé a los artistas participantes de la
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontWeight: 600, fontSize: '2.5rem', display: 'block', mt: 1 }}>
            Bienal 2024
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Button
            onClick={() => navigate(`/ver-escultores/${id}`)}
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
              width: { xs: '100%', md: 'auto' },
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            Ver Más
          </Button>
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer sx={{ mt: 4, py: 2, fontSize: '0.8rem', width: '100%', backgroundColor: '#000', color: '#fff', borderRadius: '0' }} />
    </Box>
  );
};

export default VerEvento1;
