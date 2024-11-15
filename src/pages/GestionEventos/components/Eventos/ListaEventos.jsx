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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(fecha).toLocaleDateString('es-AR', opciones);
  };

  const cargarEventos = async () => {
    setLoading(true);
    try {
      const data = await getEventos();
      setEventos(data);
      setEventosFiltrados(data);
    } catch (error) {
      toast.error('Error al cargar los eventos');
    } finally {
      setLoading(false);
    }
  };

  const filtrarEventosPorFecha = async (inicio, fin) => {
    setLoading(true);
    try {
      const data = await getEventosPorRango(inicio, fin);
      setEventos(data);
      setEventosFiltrados(data);
    } catch (error) {
      toast.error('Error al filtrar los eventos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fechaInicio && fechaFin) {
      filtrarEventosPorFecha(fechaInicio, fechaFin);
    } else {
      cargarEventos();
    }
  }, [fechaInicio, fechaFin]);

  useEffect(() => {
    if (busqueda) {
      const filtrados = eventos.filter((evento) =>
        evento.name.toLowerCase().includes(busqueda.toLowerCase())
      );
      setEventosFiltrados(filtrados);
    } else {
      setEventosFiltrados(eventos);
    }
  }, [busqueda, eventos]);

  const modificarEvento = (id) => {
    navigate(`/modificar-evento/${id}`);
  };

  const verEvento = (id) => {
    navigate(`/ver-evento/${id}`);
  };

  const confirmarEliminar = (id) => {
    setEventoAEliminar(id);
  };

  const handleEliminar = async () => {
    try {
      await eliminarEvento(eventoAEliminar);
      const actualizados = eventos.filter((evento) => evento._id !== eventoAEliminar);
      setEventos(actualizados);
      setEventosFiltrados(actualizados);
      toast.success('Evento eliminado exitosamente');
    } catch (error) {
      toast.error('Error al eliminar el evento');
    } finally {
      setEventoAEliminar(null);
    }
  };

  const resaltarTexto = (texto, busqueda) => {
    if (!busqueda) return texto;
    const partes = texto.split(new RegExp(`(${busqueda})`, 'gi'));
    return partes.map((parte, index) =>
      parte.toLowerCase() === busqueda.toLowerCase() ? (
        <span key={index} style={{ color: 'blue', fontWeight: 'bold' }}>{parte}</span>
      ) : (
        parte
      )
    );
  };

  return (
    <Box sx={{ padding: 2, marginTop: 3 }}>
      <ToastContainer />
      {loading ? (
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
          Cargando eventos...
        </Typography>
      ) : eventosFiltrados.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
          No hay eventos disponibles
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {eventosFiltrados.map((evento) => (
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
                  {resaltarTexto(evento.name, busqueda)}
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
                    onClick={() => modificarEvento(evento._id)}
                    aria-label="Modificar evento"
                    sx={{ color: '#ff4081' }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => confirmarEliminar(evento._id)}
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

      {/* Popup de confirmación */}
      <Dialog open={!!eventoAEliminar} onClose={() => setEventoAEliminar(null)}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar este evento? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEventoAEliminar(null)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleEliminar} color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListaEventos;
