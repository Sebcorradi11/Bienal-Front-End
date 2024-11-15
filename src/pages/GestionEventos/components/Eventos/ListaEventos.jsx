import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { getEventos, eliminarEvento, getEventosPorRango } from '../../../../api/eventos.routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListaEventos = ({ fechaInicio, fechaFin }) => {
  const [eventos, setEventos] = useState([]);
  const [eventoAEliminar, setEventoAEliminar] = useState(null);
  const navigate = useNavigate();

  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const fechaLocal = new Date(fecha);
    return new Date(fechaLocal.getUTCFullYear(), fechaLocal.getUTCMonth(), fechaLocal.getUTCDate())
      .toLocaleDateString('es-AR', opciones);
  };

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
      toast.error('Error al cargar los eventos');
      console.error('Error al cargar los eventos:', error);
    }
  };

  const filtrarEventos = async (fechaInicio, fechaFin) => {
    try {
      const data = await getEventosPorRango(fechaInicio, fechaFin);
      setEventos(data);
    } catch (error) {
      toast.error('Error al filtrar los eventos');
      console.error('Error al filtrar los eventos:', error);
    }
  };

  const modificar = (id) => {
    navigate(`/modificar-evento/${id}`);
  };

  const verEvento = (id) => {
    navigate(`/ver-evento/${id}`);
  };

  const confirmarEliminacion = (id) => {
    setEventoAEliminar(id);
  };

  const eliminar = async () => {
    try {
      await eliminarEvento(eventoAEliminar);
      setEventos(eventos.filter((e) => e._id !== eventoAEliminar));
      toast.success('Evento eliminado exitosamente');
    } catch (error) {
      toast.error('Error al eliminar el evento');
      console.error('Error al eliminar el evento:', error);
    }
    setEventoAEliminar(null);
  };

  return (
    <Box sx={{ padding: { xs: 2, md: 3 }, marginTop: 3 }}>
      <ToastContainer />
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
                  <IconButton onClick={() => verEvento(evento._id)} aria-label="Ver evento" color="primary">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => modificar(evento._id)} aria-label="Modificar evento" sx={{ color: '#ff4081' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => confirmarEliminacion(evento._id)} aria-label="Eliminar evento" color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
      <Dialog open={!!eventoAEliminar} onClose={() => setEventoAEliminar(null)}>
        <DialogTitle>Confirmación de eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que quieres eliminar este evento?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEventoAEliminar(null)} color="primary">
            Cancelar
          </Button>
          <Button onClick={eliminar} color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListaEventos;
