import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerEscultoresPorEvento } from '../../../api/eventos.routes';
import { Box, Typography, List, Card, CardContent } from '@mui/material';
import Footer from '../../../components/Footer';
import HeaderPublic from '../../../components/HeaderPublic';
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
        const data = await obtenerEscultoresPorEvento(id);
        setEscultores(data.sculptors || []);
        setLoading(false);
      } catch (error) {
        setError('No se pudieron cargar los escultores.');
        setLoading(false);
      }
    };

    cargarEscultores();
  }, [id]);

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
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderPublic />
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: 2, md: 4 },
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}>
          Escultores del Evento
        </Typography>

        {escultores.length === 0 ? (
          <Typography variant="h6" textAlign="center" color="textSecondary" sx={{ mt: 4 }}>
            No hay escultores asignados a este evento.
          </Typography>
        ) : (
          <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
            {escultores.map((escultor) => (
              <Card
                key={escultor._id}
                onClick={() => handleEscultorClick(escultor._id)}
                sx={{
                  backgroundColor: '#fafafa',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  mb: 2,
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  ':hover': { transform: 'scale(1.02)' },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#555' }}>
                    {escultor.name || 'Sin nombre'}
                  </Typography>
                  <Typography variant="body2">{escultor.biography || 'Sin biografía'}</Typography>
                </CardContent>
              </Card>
            ))}
          </List>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <BackButton sx={{ width: { xs: '100%', sm: '50%' }, backgroundColor: '#e57373', color: '#fff', '&:hover': { backgroundColor: '#ef5350' } }} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default EscultoresEvento;
