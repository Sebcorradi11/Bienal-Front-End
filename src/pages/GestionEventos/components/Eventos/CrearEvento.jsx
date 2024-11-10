import React, { useState } from 'react';
import {
  Box, TextField, Typography, Button, Icon
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../../components/BackButton';
import { createEvento } from '../../../../api/eventos.routes'; // Importar la función desde eventos.routes.js


const CrearEvento = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date_inicio: '',
    date_fin: '',
    location: '',
    theme: '',
    images: null,
  });
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();

  // Maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgregarEscultor = () => {
    navigate('/agregar-escultores'); // Navega a la vista de agregar escultores
  };

  // Maneja la carga de imágenes desde el input
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, images: file });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagen(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Maneja la carga de imágenes por arrastre
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFormData({ ...formData, images: file });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagen(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Enviar los datos al backend para crear el evento
  const handleCrearEvento = async () => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('date_inicio', formData.date_inicio);
    data.append('date_fin', formData.date_fin);
    data.append('location', formData.location);
    data.append('theme', formData.theme);
    if (formData.images) {
      data.append('imagen', formData.images);
    }

    try {
      // Usar la función createEvento desde eventos.routes.js
      const response = await createEvento(data);
      console.log('Evento creado:', response);

      // Mostrar mensaje de alerta
      alert('Evento creado exitosamente.');
      // Reiniciar el formulario después de la creación
      setFormData({
        name: '',
        description: '',
        date_inicio: '',
        date_fin: '',
        location: '',
        theme: '',
        images: null,
      });
      setImagen(null);

      // Desplazar la página hacia la parte superior
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error al crear el evento:', error);
      alert('Error al crear el evento. Inténtalo de nuevo.');
    }
  };



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderPublic />

      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: 2, md: 4 },
          gap: 3,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Crear Evento
        </Typography>

        <Box
          component="form"
          sx={{
            maxWidth: 600,
            margin: '0 auto',
            display: 'grid',
            gap: 2,
          }}
        >
          <TextField
            label="Nombre del Evento"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Fecha de inicio del Evento"
            name="date_inicio"
            type="date"
            value={formData.date_inicio}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Fecha de fin del Evento"
            name="date_fin"
            type="date"
            value={formData.date_fin}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Lugar del Evento"
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Descripción del Evento"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
          />
          <TextField
            label="Tema del Evento"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            fullWidth
          />
          <Box
            sx={{
              border: '2px dashed #aaa',
              borderRadius: '8px',
              textAlign: 'center',
              padding: 3,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out',
              '&:hover': { backgroundColor: '#ddd' },
            }}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            component="label"
          >
            <input type="file" hidden onChange={handleImageUpload} />
            <Icon sx={{ fontSize: 40, color: '#777' }}>
              <ImageIcon />
            </Icon>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Arrastra y suelta la imagen aquí o{' '}
              <strong>selecciona el archivo</strong> que desea subir
            </Typography>
          </Box>

          {imagen && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 2,
              }}
            >
              <img
                src={imagen}
                alt="Imagen del evento"
                style={{
                  maxWidth: '100%',
                  maxHeight: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Box>
          )}

          <Button
            fullWidth
            onClick={handleAgregarEscultor}
            sx={{
              height: '60px',
              borderRadius: '30px',
              backgroundImage: `url(${fondoBoton})`,
              backgroundSize: 'cover',
              color: 'white',
              textTransform: 'none',
              '&:hover': { opacity: 0.9 },
            }}
          >
            <Typography variant="h6">Escultores</Typography>
          </Button>

          {/* Botones Crear Evento y Atrás */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleCrearEvento}
              sx={{ width: '48%' }}
            >
              Crear Evento
            </Button>
            <BackButton sx={{ width: '48%' }} />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default CrearEvento;
