import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { getEventos, eliminarEvento, getEventosPorRango } from '../../../../api/eventos.routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListaEventos = ({ fechaInicio, fechaFin, busqueda }) => {
  const [eventos, setEventos] = useState([]);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [eventoAEliminar, setEventoAEliminar] = useState(null);
  const navigate = useNavigate();

  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const fechaLocal = new Date(fecha);
    return new Date(fechaLocal.getUTCFullYear(), fechaLocal.getUTCMonth(), fechaLocal.getUTCDate())
      .toLocaleDateString('es-AR', opciones);
  };

  const cargarEventos = async () => {
    try {
      const data = await getEventos();
      setEventos(data);
      setEventosFiltrados(data);
    } catch (error) {
      toast.error('Error al cargar los eventos');
    }
  };

  const eliminar = (id) => {
    setEventoAEliminar(id);
  };

  useEffect(() => {
    cargarEventos();
  }, []);

  return (
    <Box sx={{ padding: 2, marginTop: 3 }}>
      <ToastContainer />
      <Grid container spacing={2}>
        {eventosFiltrados.map((evento) => (
          <Grid item xs={12} sm={6} md={4} key={evento._id}>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <Typography variant="body1" fontWeight="bold">{evento.name}</Typography>
              <Typography variant="body1" fontWeight="bold">
                {`${formatearFecha(evento.date_inicio)} - ${formatearFecha(evento.date_fin)}`}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                <IconButton onClick={() => navigate(`/ver-evento/${evento._id}`)} color="primary">
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() => navigate(`/modificar-evento/${evento._id}`)} sx={{ color: '#ff4081' }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => eliminar(evento._id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

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
          <Button
            onClick={async () => {
              try {
                await eliminarEvento(eventoAEliminar);
                setEventos(eventos.filter((e) => e._id !== eventoAEliminar));
                setEventosFiltrados(eventosFiltrados.filter((e) => e._id !== eventoAEliminar));
                toast.success('Evento eliminado exitosamente');
              } catch (error) {
                toast.error('Error al eliminar el evento');
              } finally {
                setEventoAEliminar(null);
              }
            }}
            color="error"
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};


export default ListaEventos;
