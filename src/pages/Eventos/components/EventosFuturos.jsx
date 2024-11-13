import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import titleRectangle from '../../../assets/eventos/Rectangle-2.svg';
import EventCard from './EventoCard';
import { getEventosFuturos } from '../../../api/eventos.routes'; // Importar la función desde eventos.routes.js

const EventosFuturos = () => {
  const [futureEvents, setFutureEvents] = useState([]);

  useEffect(() => {
    const fetchFutureEvents = async () => {
      try {
        const eventos = await getEventosFuturos();
        setFutureEvents(eventos);
      } catch (error) {
        console.error('Error al obtener los eventos futuros:', error);
      }
    };

    fetchFutureEvents();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#fff', color: 'black', padding: '20px 20px' }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
          Eventos Futuros
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
        {futureEvents.length > 0 ? (
          <Grid container spacing={3} justifyContent="center" >
            {futureEvents.map((event) => (
              <Grid item key={event._id} xs={12} sm={6} md={4} lg={3}>
                <EventCard
                  id={event._id}
                  title={event.name}
                  date={event.date}
                  image={event.images[0]}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No hay eventos futuros.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default EventosFuturos;
