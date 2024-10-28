import { ClipLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';


const LoaderSpinner = ({
  loading,
  size = 50,
  color = '#000',
  isChildren = false,
}) => {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    const messages = [
      'Cargando...',
      'Aguarde un momento...',
      'Procesando datos...',
    ];
    let index = 0;

    const interval = setInterval(() => {
      setMessage(messages[index]);
      index = (index + 1) % messages.length; // Loop through messages
    }, 1500); // Change message every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      position: isChildren ? 'relative' : 'fixed',
      top: isChildren ? 'auto' : 0,
      left: isChildren ? 'auto' : 0,
      right: isChildren ? 'auto' : 0,
      bottom: isChildren ? 'auto' : 0,
      bgcolor: isChildren ? 'transparent' : 'rgba(80, 80, 90, 0.6)',
      zIndex: isChildren ? 'auto' : 10,
    }}
  >
    {/* {loading && ( */}
      <CircularProgress size={size} sx={{ color: color }} />
    {/* )} */}
    <Typography
      variant="body1"
      color={isChildren ? 'text.secondary' : 'text.primary'}
      sx={{ mt: 2, color: 'black' }}
    >
      <strong>{message}</strong>
    </Typography>
  </Box>
  );
};

export default LoaderSpinner;