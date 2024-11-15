import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventoPorId, actualizarEvento } from '../../../../api/eventos.routes';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import BackButton from '../../../../components/BackButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderSpinner from '../../../../components/LoaderSpinner';

const ModificarEvento = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [evento, setEvento] = useState({
    name: '',
    date_inicio: '',
    date_fin: '',
    location: '',
    theme: '',
    description: '',
    image: '', // Ahora es solo una imagen
  });
  const [nuevaImagen, setNuevaImagen] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarEvento = async () => {
      setLoading(true);
      try {
        const data = await getEventoPorId(id);
        setEvento({
          ...data,
          date_inicio: data.date_inicio.split('T')[0],
          date_fin: data.date_fin.split('T')[0],
        });
      } catch (error) {
        console.error('Error al cargar el evento:', error);
        toast.error('Error al cargar el evento.');
      } finally {
        setLoading(false);
      }
    };
    cargarEvento();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento({ ...evento, [name]: value });
  };

  const handleAgregarImagen = (e) => {
    const file = e.target.files[0];
    setNuevaImagen(file);
    toast.success('Imagen Cargada correctamente');
  };

  const handleModificar = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', evento.name);
    formData.append('date_inicio', evento.date_inicio);
    formData.append('date_fin', evento.date_fin);
    formData.append('location', evento.location);
    formData.append('theme', evento.theme);
    formData.append('description', evento.description);

    if (nuevaImagen) {
      formData.append('image', nuevaImagen); // Solo una imagen
    }

    try {
      await actualizarEvento(id, formData);
      toast.success('Evento actualizado exitosamente');
      navigate(`/ver-evento/${id}`);
    } catch (error) {
      console.error('Error al actualizar el evento:', error);
      toast.error('Error al actualizar el evento.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoaderSpinner loading={loading} />;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderPublic />
      <ToastContainer />
      
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: 2, md: 4 },
          backgroundColor: '#f5f5f5',
        }}
      >
        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ minHeight: '80vh' }}>
          <Grid item xs={12} md={8} lg={6}>
            <Typography variant="h4" gutterBottom textAlign="center">
              Modificar Evento - {evento.name}
            </Typography>

            {/* Campos del formulario */}
            <TextField
              label="Nombre del Evento"
              name="name"
              value={evento.name}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Fecha de Inicio"
              type="date"
              name="date_inicio"
              value={evento.date_inicio}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Fecha de Fin"
              type="date"
              name="date_fin"
              value={evento.date_fin}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Lugar del Evento"
              name="location"
              value={evento.location}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Temática del Evento"
              name="theme"
              value={evento.theme}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Descripción del Evento"
              name="description"
              value={evento.description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              sx={{ marginBottom: 2 }}
            />

            {/* Mostrar y gestionar imagen */}
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="body1" gutterBottom>
                Imagen del Evento
              </Typography>
              {evento.image && (
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    overflow: 'hidden',
                    borderRadius: '8px',
                    marginBottom: 1,
                  }}
                >
                  <img
                    src={evento.image}
                    alt="Imagen del evento"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              )}
              <Button
                variant="contained"
                component="label"
                sx={{
                  height: 100,
                  width: 100,
                  backgroundImage: `url(${fondoBoton})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  borderRadius: 8,
                  textTransform: 'none',
                }}
              >
                <AddIcon />
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleAgregarImagen}
                />
              </Button>
            </Box>

            {/* Botones de Modificar Evento y Atrás */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <Button
                variant="contained"
                onClick={handleModificar}
                sx={{
                  width: { xs: '100%', sm: '48%' },
                  height: '60px',
                  borderRadius: '30px',
                  backgroundImage: `url(${fondoBoton})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': { opacity: 0.9 },
                }}
              >
                Modificar Evento
              </Button>
              <BackButton sx={{ width: '48%' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ModificarEvento;
