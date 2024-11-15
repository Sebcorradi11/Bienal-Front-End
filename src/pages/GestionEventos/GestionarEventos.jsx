import React, { useState } from 'react';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import BackButton from '../../components/BackButton';
import ButtonNavigate from '../../components/ButtonNavigate';
import BuscadorEvento from '../../components/Buscador';
import ListaEventos from './components/Eventos/ListaEventos';
import FiltrosFecha from './components/Eventos/FiltrosFecha';

const GestionarEventos = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [busqueda, setBusqueda] = useState(''); // Estado para el término de búsqueda

  const handleFiltrar = (inicio, fin) => {
    setFechaInicio(inicio);
    setFechaFin(fin);
  };

  const handleBuscar = (termino) => {
    setBusqueda(termino); // Actualizar el estado con el término de búsqueda
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
          <ButtonNavigate name="Crear Eventos" route="/crear-evento" />

          <FiltrosFecha onFiltrar={handleFiltrar} />

          <BuscadorEvento onBuscar={handleBuscar} />
        </Box>

        <ListaEventos fechaInicio={fechaInicio} fechaFin={fechaFin} busqueda={busqueda} />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
          <BackButton sx={{ width: '48%' }} />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default GestionarEventos;
