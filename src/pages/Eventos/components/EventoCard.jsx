import React from 'react';
import { Card, CardContent, Avatar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EventoCard = ({ title, date, image, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ver-evento-public/${id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        borderRadius: '20px',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
        },
        width: { xs: '100%', sm: 300, md: 350 },
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '16px',
      }}
    >
      <Avatar
        src={image || 'https://via.placeholder.com/150'}
        alt={title}
        sx={{
          width: 180,
          height: 180,
          borderRadius: '50%',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          mb: 2,
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          padding: 0,
          color: '#333',
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.4rem', md: '1.6rem' },
            color: '#333',
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventoCard;
