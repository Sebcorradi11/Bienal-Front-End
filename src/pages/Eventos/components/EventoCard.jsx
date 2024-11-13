import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EventoCard = ({ title, date, image, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ver-evento-public/${id}`);
  };

  return (
    <Card sx={{ cursor: 'pointer' }} onClick={handleClick}>
      {/* Imagen del evento, clickeable sin overlay */}
      <CardMedia
        component="img"
        height="500"
        image={image || 'https://via.placeholder.com/500'}
        alt={title}
        sx={{
          transition: 'transform 0.3s ease',
          ':hover': { transform: 'scale(1.05)' }, // Efecto de escala en hover
        }}
      />

      {/* Contenido del evento */}
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventoCard;