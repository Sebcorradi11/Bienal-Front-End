import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import titleRectangle from '../../../assets/eventos/Rectangle-2.svg';
import EventCard from './EventoCard';
import { getEventosPasados } from '../../../api/eventos.routes'; // Importar la función desde eventos.routes.js

const EventosPasados = () => {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        const eventos = await getEventosPasados();
        setPastEvents(eventos);
      } catch (error) {
        console.error('Error al obtener los eventos pasados:', error);
      }
    };

    fetchPastEvents();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#fff', color: 'black', padding: '20px 20px' }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
          Eventos Pasados
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
        {pastEvents.length > 0 ? (
          <Grid container spacing={3} justifyContent="center">
            {pastEvents.map((event) => (
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
          <Typography variant="body1">No hay eventos pasados.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default EventosPasados;
