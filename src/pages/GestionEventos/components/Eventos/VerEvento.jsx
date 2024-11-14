import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate para la navegación
import { getEventoPorId } from '../../../../api/eventos.routes'; // Importar la función desde eventos.routes.js
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import BackButton from '../../../../components/BackButton';

const VerEvento = () => {
  const { id } = useParams(); // Obtiene el ID del evento de la URL
  const [evento, setEvento] = useState(null); // Estado para el evento
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate(); // Hook para navegar

  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const fechaLocal = new Date(fecha);
    return new Date(fechaLocal.getUTCFullYear(), fechaLocal.getUTCMonth(), fechaLocal.getUTCDate())
      .toLocaleDateString('es-AR', opciones);
  };

  useEffect(() => {
    const cargarEvento = async () => {
      try {
        const data = await getEventoPorId(id); // Llamar a la API para obtener el evento por ID
        setEvento(data);
      } catch (error) {
        setError('No se pudo cargar el evento.');
      }
    };
    cargarEvento();
  }, [id]);

  const handleVerEscultores = () => {
    console.log('Ver escultores');
    navigate(`/ver-escultores/${id}`); // Navega a la vista de escultores para el evento con su ID
  };

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  if (!evento) {
    return <Typography variant="h6">Cargando evento...</Typography>;
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
              Ver Evento - {evento.name}
            </Typography>

            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="body1" gutterBottom>
                <strong>Fecha de inicio del Evento:</strong> {formatearFecha(evento.date_inicio)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Fecha de fin del Evento:</strong> {formatearFecha(evento.date_fin)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Lugar del Evento:</strong> {evento.location}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Descripción del Evento:</strong> {evento.description}
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
                src={evento.images[0] || 'https://via.placeholder.com/300'}
                alt="Imagen del evento"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>

            <Button
              fullWidth
              onClick={handleVerEscultores}
              sx={{
                marginTop: 3,
                height: '60px',
                borderRadius: '30px',
                backgroundImage: `url(${fondoBoton})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textTransform: 'none',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            >
              <Typography variant="h6">Escultores</Typography>
            </Button>

            {/* Botón Atrás */}
            <BackButton sx={{ width: '48%' }} />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default VerEvento;
