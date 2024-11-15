import React, { useState } from 'react';
import { TextField, Box, Grid, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FiltrosFecha = ({ onFiltrar }) => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleFiltrar = () => {
    if (fechaInicio && fechaFin) {
      onFiltrar(fechaInicio, fechaFin);
    } else {
      toast.error('Por favor, selecciona ambas fechas para filtrar.');
    }
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 3 },
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <ToastContainer />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Desde"
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Hasta"
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleFiltrar}>
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FiltrosFecha;
