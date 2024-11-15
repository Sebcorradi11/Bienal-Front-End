import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, Button, Icon } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../../components/BackButton';
import { createEvento } from '../../../../api/eventos.routes';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import styles

const CrearEvento = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date_inicio: '',
    date_fin: '',
    location: '',
    theme: '',
    image: null,
    sculptors: [], // Lista de escultores seleccionados
  });
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('eventFormData') || '{}');
    const savedSculptors = JSON.parse(localStorage.getItem('selectedSculptors') || '[]');

    setFormData((prevData) => ({
      ...prevData,
      ...savedFormData,
      sculptors: savedSculptors,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    const { image, ...dataToSave } = updatedFormData;
    localStorage.setItem('eventFormData', JSON.stringify(dataToSave));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagen(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAgregarEscultores = () => {
    navigate('/agregar-escultores'); // Navega a la vista de agregar escultores
  };

  const handleCrearEvento = async () => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('date_inicio', formData.date_inicio);
    data.append('date_fin', formData.date_fin);
    data.append('location', formData.location);
    data.append('theme', formData.theme);
    if (formData.image) {
      data.append('image', formData.image);
    }
    const sculptorsArray = Array.isArray(formData.sculptors) ? formData.sculptors : [formData.sculptors];
    sculptorsArray.forEach((sculptorId) => {
        data.append('sculptors', sculptorId);
    });

    try {
      const response = await createEvento(data);
      toast.success('Evento creado exitosamente. 🎉'); // Success toast
      localStorage.removeItem('eventFormData');
      localStorage.removeItem('selectedSculptors');
      setFormData({
        name: '',
        description: '',
        date_inicio: '',
        date_fin: '',
        location: '',
        theme: '',
        image: null,
        sculptors: [],
      });
      setImagen(null);
      window.scrollTo(0, 0);

      navigate(`/ver-evento/${response._id}`);
    } catch (error) {
      console.error('Error al crear el evento:', error);
      toast.error(`Error al crear el evento: ${error.response?.data.error || 'Inténtalo de nuevo.'} 😞`); // Error toast
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderPublic />
      <ToastContainer /> {/* Toastify container */}
      <Box sx={{ flexGrow: 1, padding: { xs: 2, md: 4 }, gap: 3, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Crear Evento
        </Typography>
        <Box component="form" sx={{ maxWidth: 600, margin: '0 auto', display: 'grid', gap: 2 }}>
          <TextField
            label="Nombre del Evento"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Fecha de inicio"
            name="date_inicio"
            type="date"
            value={formData.date_inicio}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Fecha de fin"
            name="date_fin"
            type="date"
            value={formData.date_fin}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Lugar"
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Descripción"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
          />
          <TextField
            label="Tema"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            fullWidth
          />
          <Button
            fullWidth
            onClick={handleAgregarEscultores}
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
            component="label"
          >
            <input type="file" hidden onChange={handleImageUpload} />
            <Icon sx={{ fontSize: 40, color: '#777' }}>
              <ImageIcon />
            </Icon>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Arrastra y suelta la imagen aquí o{' '}
              <strong>selecciona el archivo</strong> que deseas subir
            </Typography>
          </Box>
          {imagen && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
              <img
                src={imagen}
                alt="Vista previa de la imagen"
                style={{
                  maxWidth: '100%',
                  maxHeight: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Box>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="contained" color="primary" onClick={handleCrearEvento} sx={{ width: '48%' }}>
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
