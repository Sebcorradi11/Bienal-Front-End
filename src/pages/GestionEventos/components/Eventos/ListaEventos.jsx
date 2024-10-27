import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { getEventos, eliminarEvento, getEventosPorRango } from '../../../../api/eventos.routes';

const ListaEventos = ({ fechaInicio, fechaFin }) => {
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();

  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const fechaLocal = new Date(fecha);
    return new Date(fechaLocal.getUTCFullYear(), fechaLocal.getUTCMonth(), fechaLocal.getUTCDate())
      .toLocaleDateString('es-AR', opciones);
  };

  // Cargar eventos al inicio y cuando cambien las fechas
  useEffect(() => {
    if (fechaInicio && fechaFin) {
      filtrarEventos(fechaInicio, fechaFin);
    } else {
      cargarEventos();
    }
  }, [fechaInicio, fechaFin]);

  const cargarEventos = async () => {
    try {
      const data = await getEventos();
      setEventos(data);
    } catch (error) {
      console.error('Error al cargar los eventos:', error);
    }
  };

  const filtrarEventos = async (fechaInicio, fechaFin) => {
    try {
      const data = await getEventosPorRango(fechaInicio, fechaFin);
      setEventos(data);
    } catch (error) {
      console.error('Error al filtrar los eventos:', error);
    }
  };

  const modificar = (id) => {
    navigate(`/modificar-evento/${id}`);
  };

  const verEvento = (id) => {
    navigate(`/ver-evento/${id}`);
  };

  const eliminar = async (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este evento?');
    if (confirmacion) {
      try {
        await eliminarEvento(id);
        setEventos(eventos.filter((e) => e._id !== id));
        alert('Evento eliminado exitosamente');
      } catch (error) {
        console.error('Error al eliminar el evento:', error);
        alert('Error al eliminar el evento');
      }
    }
  };

  return (
    <Box sx={{ padding: { xs: 2, md: 3 }, marginTop: 3 }}>
      {/* Mostrar mensaje si no hay eventos */}
      {eventos.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
          No hay eventos en estas fechas
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {eventos.map((evento) => (
            <Grid item xs={12} sm={6} md={4} key={evento._id}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#f9f9f9',
                  padding: 2,
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  minHeight: '120px',
                }}
              >
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  {`${evento.name}`}
                </Typography>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  {`${formatearFecha(evento.date_inicio)} - ${formatearFecha(evento.date_fin)}`}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                  <IconButton
                    onClick={() => verEvento(evento._id)}
                    aria-label="Ver evento"
                    color="primary"
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => modificar(evento._id)}
                    aria-label="Modificar evento"
                    sx={{ color: '#ff4081' }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => eliminar(evento._id)}
                    aria-label="Eliminar evento"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ListaEventos;