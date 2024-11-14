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
        borderRadius: '16px', // Rounded corners
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'scale(1.03)', // Slightly enlarge on hover
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', // Deeper shadow on hover
        },
        maxWidth: 350, // Limit width for a cleaner card layout
        margin: 'auto', // Center card in the container
      }}
      onClick={handleClick}
    >
      {/* Event Image with padding and rounded corners */}
      <Box sx={{ overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
        <CardMedia
          component="img"
          height="200"
          image={image || 'https://via.placeholder.com/500'}
          alt={title}
          sx={{
            transition: 'transform 0.3s ease',
            ':hover': { transform: 'scale(1.05)' }, // Subtle zoom on image hover
          }}
        />
      </Box>

      {/* Event Content */}
      <CardContent sx={{ textAlign: 'center', padding: '16px' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
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
