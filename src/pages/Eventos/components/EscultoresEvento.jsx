import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerEscultoresPorEvento } from '../../../api/eventos.routes';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import LoaderSpinner from '../../../components/LoaderSpinner';
import BackButton from '../../../components/BackButton';

const EscultoresEvento = () => {
  const { id } = useParams();
  const [escultores, setEscultores] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarEscultores = async () => {
      try {
        const data = await obtenerEscultoresPorEvento(id); // Nueva función en la API
        setEscultores(data.sculptors || []);
        setLoading(false);
      } catch (error) {
        setError('No se pudieron cargar los escultores.');
        setLoading(false);
      }
    };

    cargarEscultores();
  }, [id]);

  // Función para manejar el clic en cada escultor
  const handleEscultorClick = (escultorId) => {
    navigate(`/ver-escultores-public/${escultorId}`);
  };

  if (loading) {
    return <LoaderSpinner loading={loading} size={60} color="#000" />;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', p: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Escultores del Evento
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {escultores.map((escultor) => (
          <Grid item xs={12} sm={6} md={4} key={escultor._id}>
            <Card
              onClick={() => handleEscultorClick(escultor._id)} // Navegar a los detalles del escultor al hacer clic
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                ':hover': { transform: 'scale(1.02)' },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {escultor.name || 'Sin nombre'}
                </Typography>
                <Typography variant="body2">{escultor.biography || 'Sin biografía'}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <BackButton />
      </Box>
    </Box>
  );
};

export default EscultoresEvento;
