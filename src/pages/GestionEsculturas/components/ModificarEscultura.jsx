import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Typography, Button, Icon
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../../../components/BackButton';
import { getEsculturaPorId, actualizarEscultura } from '../../../api/sculptures.routes';

const ModificarEscultura = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    tematica: '',
    fechaCreacion: '',
    imagenPre: null,
    imagenDurante: null,
    imagenPost: null,
  });
  const [imagenVistaPrevia, setImagenVistaPrevia] = useState({
    imagenPre: null,
    imagenDurante: null,
    imagenPost: null,
  });
  const [loading, setLoading] = useState(true);

  // Cargar los datos actuales de la escultura
  useEffect(() => {
    const fetchEscultura = async () => {
      try {
        const data = await getEsculturaPorId(id);
        setFormData({
          nombre: data.name,
          tematica: data.description,
          fechaCreacion: data.creation_date ? data.creation_date.split('T')[0] : '',
          imagenPre: null,
          imagenDurante: null,
          imagenPost: null,
        });
        // Establecer las URLs de las imágenes actuales para mostrar en la vista previa
        setImagenVistaPrevia({
          imagenPre: `${data.imagenPre}?t=${new Date().getTime()}` || null,
          imagenDurante: `${data.imagenDurante}?t=${new Date().getTime()}` || null,
          imagenPost: `${data.imagenPost}?t=${new Date().getTime()}` || null,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar la escultura:", error);
        alert("Error al cargar la escultura.");
        setLoading(false);
      }
    };
    fetchEscultura();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (event, field) => {
    const file = event.target.files[0];
    setFormData({ ...formData, [field]: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagenVistaPrevia((prev) => ({ ...prev, [field]: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event, field) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFormData({ ...formData, [field]: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagenVistaPrevia((prev) => ({ ...prev, [field]: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const esculturaData = new FormData();
    if (formData.nombre) esculturaData.append('name', formData.nombre);
    if (formData.tematica) esculturaData.append('description', formData.tematica);
    if (formData.fechaCreacion) esculturaData.append('creation_date', formData.fechaCreacion);

    if (formData.imagenPre) esculturaData.append('imagenPre', formData.imagenPre);
    if (formData.imagenDurante) esculturaData.append('imagenDurante', formData.imagenDurante);
    if (formData.imagenPost) esculturaData.append('imagenPost', formData.imagenPost);

    try {
      const response = await actualizarEscultura(id, esculturaData);
      console.log("Escultura actualizada:", response);

      alert('Escultura actualizada exitosamente.');
      window.scrollTo(0, 0);
      // Redirigir al usuario a la página de visualización después de actualizar.
      navigate(`/ver-escultura/${id}`);
    } catch (error) {
      console.error("Error al actualizar la escultura:", error);
      alert('Error al actualizar la escultura. Inténtalo de nuevo.');
    }
  };

  if (loading) return <p>Cargando...</p>;

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
          Modificar Escultura
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 600,
            margin: '0 auto',
            display: 'grid',
            gap: 2,
          }}
        >
          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Descripción de la Temática"
            name="tematica"
            value={formData.tematica}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Fecha de Creación"
            name="fechaCreacion"
            type="date"
            value={formData.fechaCreacion}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          {['imagenPre', 'imagenDurante', 'imagenPost'].map((field, index) => (
            <Box
              key={index}
              sx={{
                border: '2px dashed #aaa',
                borderRadius: '8px',
                textAlign: 'center',
                padding: 3,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease-in-out',
                '&:hover': { backgroundColor: '#ddd' },
              }}
              onDrop={(e) => handleDrop(e, field)}
              onDragOver={(e) => e.preventDefault()}
              component="label"
            >
              <input type="file" hidden onChange={(e) => handleImageUpload(e, field)} />
              <Icon sx={{ fontSize: 40, color: '#777' }}>
                <ImageIcon />
              </Icon>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Arrastra y suelta la imagen aquí o{' '}
                <strong>selecciona el archivo</strong> que deseas subir
              </Typography>

              {/* Mostrar la imagen actual si existe */}
              {imagenVistaPrevia[field] && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 2,
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                    Imagen actual:
                  </Typography>
                  <img
                    src={imagenVistaPrevia[field]}
                    alt="Vista previa"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '300px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              )}
            </Box>
          ))}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 2,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '48%' }}
            >
              Actualizar Escultura
            </Button>
            <BackButton sx={{ width: '48%' }} />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default ModificarEscultura;
