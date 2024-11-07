import React, { useState } from 'react';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import { Box, Container, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CrearEventoButton from './components/Eventos/EventoButton';
import BuscadorEvento from '../../components/Buscador';
import ListaEventos from './components/Eventos/ListaEventos';
import FiltrosFecha from './components/Eventos/FiltrosFecha';
import { useNavigate } from 'react-router-dom';

const GestionarEventos = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleFiltrar = (inicio, fin) => {
    setFechaInicio(inicio);
    setFechaFin(fin);
  };

  const handleAtras = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderPublic />

      <Container sx={{ mt: 4, flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            alignItems: 'center',
            gap: 2,
            mb: 3,
            justifyContent: 'space-between',
          }}
        >
          {/* Crear Evento a la izquierda */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: isSmallScreen ? 'center' : 'flex-start',
              width: isSmallScreen ? '100%' : 'auto',
            }}
          >
            <CrearEventoButton />
          </Box>

          {/* Filtro de Fechas en el medio */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              width: isSmallScreen ? '100%' : 'auto',
            }}
          >
            <FiltrosFecha onFiltrar={handleFiltrar} />
          </Box>

          {/* Buscador a la derecha */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: isSmallScreen ? 'center' : 'flex-end',
              width: isSmallScreen ? '100%' : 'auto',
            }}
          >
            <BuscadorEvento />
          </Box>
        </Box>

        {/* Lista de eventos con fechas filtradas */}
        <ListaEventos fechaInicio={fechaInicio} fechaFin={fechaFin} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
            mb: 2,
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleAtras}
            sx={{
              height: '50px',
              width: '200px',
              borderRadius: '25px',
              backgroundColor: '#1976d2',
              color: 'white',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Atrás
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default GestionarEventos;
