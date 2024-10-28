import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import titleRectangle from '../../../assets/eventos/Rectangle-2.svg';
import EventCard from './EventoCard';
import { getEventoActual } from '../../../api/eventos.routes'; // Importar la función desde las rutas de eventos

const EventoActual = () => {
  const [actualEvent, setActualEvent] = useState(null);

  useEffect(() => {
    const fetchActualEvent = async () => {
      try {
        const evento = await getEventoActual(); // Usar la función desde eventos.routes.js
        setActualEvent(evento);
      } catch (error) {
        console.error('Error al obtener el evento actual:', error);
      }
    };

    fetchActualEvent();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#fff', color: 'black', padding: '20px 20px' }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
          Evento Actual
        </Typography>
      </Box>

      <Box sx={{ position: 'relative', mb: 2, textAlign: 'left' }}>
        <Box
          component="img"
          src={titleRectangle}
          alt="Decorative Rectangle"
          sx={{
            position: 'absolute',
            bottom: '-10px',
            left: 0,
            width: '120px',
          }}
        />
      </Box>

      <Box sx={{ paddingY: 4, paddingX: 2, backgroundColor: '#fff' }}>
        <Grid container spacing={3} paddingLeft={2}>
          {actualEvent ? (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <EventCard
                title={actualEvent.name}
                date="Hoy"
                image={actualEvent.images[0]} // Suponiendo que es un array
              />
            </Grid>
          ) : (
            <Typography variant="body1">No hay un evento actual.</Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default EventoActual;
