import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EventoCard = ({ title, date, image, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ver-evento-public/${id}`);
  };

  return (
    <Card
      sx={{
        cursor: 'pointer',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
        },
        width: { xs: '100%', sm: '80%', md: '350px' },
        margin: { xs: '16px auto', md: '20px' },
      }}
      onClick={handleClick}
    >
      <Box sx={{ overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
        <CardMedia
          component="img"
          height="200"
          image={image || 'https://via.placeholder.com/500'}
          alt={title}
          sx={{
            objectFit: 'contain', // Ajuste para ver la imagen completa
            width: '100%',
            height: '200px',
          }}
        />
      </Box>

      <CardContent
        sx={{
          textAlign: 'center',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          minHeight: '80px',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            fontSize: { xs: '1rem', md: '1.2rem' },
            color: '#333',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
        >
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventoCard;
