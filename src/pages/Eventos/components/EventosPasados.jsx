import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import titleRectangle from '../../../assets/eventos/Rectangle-2.svg';
import EventCard from './EventoCard';
import { pastEvents } from '../mocksEventosPasados';

const EventosPasados = () => {
    return (
        <Box sx={{ backgroundColor: '#fff', color: 'black', padding: '20px 20px' }}>

            <Box>
            <Typography 
                    variant="h6" 
                    sx={{ fontWeight: 'bold', fontSize: '2rem' }}
                >
                    Eventos Pasados 
                </Typography>
            </Box>

            {/* Título con SVG debajo */}
            <Box sx={{ position: 'relative', mb: 2, textAlign: 'left' }}>
                {/* SVG debajo del título */}
                <Box
                    component="img"
                    src={titleRectangle}
                    alt="Decorative Rectangle"
                    sx={{
                        position: 'absolute',
                        bottom: '-10px', // Ajusta la posición del SVG
                        left: 0,
                        width: '120px', // Ajusta el tamaño del SVG según sea necesario
                    }}
                />
            </Box>

            <Box sx={{ paddingY: 4, paddingX: 2, backgroundColor: '#fff' }}> {/* Agregamos padding lateral */}
            <Grid container spacing={3} justifyContent="center">
                {pastEvents.map((event) => (
                    <Grid item key={event.id} xs={12} sm={6} md={4} lg={3}>
                        <EventCard {...event} />
                    </Grid>
                ))}
            </Grid>
        </Box>
        </Box>
        
    );
};

export default EventosPasados;
