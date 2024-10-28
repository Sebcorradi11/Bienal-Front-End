import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid, IconButton } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventoPorId, actualizarEvento } from '../../../../api/eventos.routes';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/gestioneventos/Rectangle 32.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

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
    images: [],
  });
  const [nuevasImagenes, setNuevasImagenes] = useState([]);
  const [imagenesAEliminar, setImagenesAEliminar] = useState([]);

  useEffect(() => {
    const cargarEvento = async () => {
      try {
        const data = await getEventoPorId(id);
        setEvento({
          ...data,
          date_inicio: data.date_inicio.split('T')[0],
          date_fin: data.date_fin.split('T')[0],
        });
      } catch (error) {
        console.error('Error al cargar el evento:', error);
      }
    };
    cargarEvento();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento({ ...evento, [name]: value });
  };

  const handleAgregarImagen = (e) => {
    const files = e.target.files;
    setNuevasImagenes([...nuevasImagenes, ...files]);
    alert('Imagen cargada correctamente');
  };

  const handleEliminarImagen = (imagen) => {
    setImagenesAEliminar([...imagenesAEliminar, imagen]);
    setEvento({
      ...evento,
      images: evento.images.filter((img) => img !== imagen),
    });
  };

  const handleModificar = async () => {
    const formData = new FormData();
    formData.append('name', evento.name);
    formData.append('date_inicio', evento.date_inicio);
    formData.append('date_fin', evento.date_fin);
    formData.append('location', evento.location);
    formData.append('theme', evento.theme);
    formData.append('description', evento.description);

    nuevasImagenes.forEach((file) => {
      formData.append('imagenes', file);
    });

    formData.append('imagenesAEliminar', JSON.stringify(imagenesAEliminar));

    try {
      await actualizarEvento(id, formData);
      alert('Evento actualizado exitosamente');
      navigate(-1); 
    } catch (error) {
      console.error('Error al actualizar el evento:', error);
      alert('Error al actualizar el evento');
    }
  };

  const handleAtras = () => {
    navigate(-1); 
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderPublic />
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

            {/* Mostrar y gestionar imágenes */}
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="body1" gutterBottom>
                Imágenes del Evento
              </Typography>
              <Grid container spacing={1}>
                {evento.images.map((imagen, index) => (
                  <Grid item key={index}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        overflow: 'hidden',
                        borderRadius: '8px',
                        marginBottom: 1,
                      }}
                    >
                      <img
                        src={imagen}
                        alt={`Imagen ${index}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <IconButton
                        onClick={() => handleEliminarImagen(imagen)}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                ))}
                <Grid item>
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
                      multiple
                      accept="image/*"
                      onChange={handleAgregarImagen}
                    />
                  </Button>
                </Grid>
              </Grid>
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
              <Button
                startIcon={<ArrowBackIcon />}
                variant="outlined"
                color="secondary"
                onClick={handleAtras}
                sx={{ width: { xs: '100%', sm: '48%' } }}
              >
                Atrás
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ModificarEvento;