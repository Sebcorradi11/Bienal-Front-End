import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventoPorId } from '../../../api/eventos.routes';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import fondoBoton from '../../../assets/fondobutton/Rectangle 32.svg';

const VerEvento1 = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
      <HeaderPublic />

      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          {/* Título y Descripción */}
          <Grid item xs={12} md={8}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontSize: '3rem', mb: 1 }}>
              Bienal 2024 
            </Typography>
            <Typography variant="h4" component="h2" sx={{ fontStyle: 'italic', color: 'gray', fontSize: '2rem', mb: 3 }}>
              {evento.theme}
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Descripción:
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {evento.description}
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Temática:
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {evento.theme_description}
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Fechas:
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {formatearFecha(evento.date_inicio)} - {formatearFecha(evento.date_fin)}
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Lugar:
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              {evento.location}
            </Typography>
          </Grid>

          {/* Imagen y Botones de Compartir Centrados */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            {/* Imagen del evento ajustada a un tamaño más pequeño */}
            <Box
              component="img"
              src={evento.images[0] || 'https://via.placeholder.com/250'}
              alt="Imagen del evento"
              sx={{ width: '80%', borderRadius: '8px', mb: 0 }}
            />

            {/* Texto de Compartir y Botones de Compartir */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Compartí
                </Typography>
                <Typography variant="h5" component="span" sx={{ fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', fontWeight: 'bold' }}>
                  Bienal 2024
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

        {/* Sección de Artistas Participantes con Texto y Botón Alineados */}
        <Box sx={{ backgroundColor: '#000', color: '#fff', p: 3, mt: 4, borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h5" component="h3" sx={{ fontWeight: '400', fontFamily: 'bold', mb: 1 }}>
              Conocé a los artistas participantes de la
            </Typography>
            <Typography variant="h5" component="span" sx={{ fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', fontWeight: 'bold' }}>
              Bienal 2024
            </Typography>
          </Box>
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

export default VerEvento1;
