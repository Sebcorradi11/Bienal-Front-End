import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '2rem',
      }}
    >
      <Typography variant="h3" component="div" color="primary" gutterBottom>
        ¡Ups! Parece que esta página no existe.
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        No hemos podido encontrar la página que buscas. Tal vez la URL esté mal escrita o la página ha sido movida.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoBack}>
        Volver al inicio
      </Button>
    </Box>
  );
};

export default NotFound;
