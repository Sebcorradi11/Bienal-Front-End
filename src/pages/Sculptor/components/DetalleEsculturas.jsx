import React, { useEffect, useState } from 'react';
import { Box, Typography, List, Card, CardContent } from '@mui/material';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import BackButton from '../../../components/BackButton';
import LoaderSpinner from '../../../components/LoaderSpinner';
import { useParams, useNavigate } from 'react-router-dom';
import { getEscultorPorId } from '../../../api/Sculptores/sculptoresApi';

const DetalleEsculturas = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [esculturas, setEsculturas] = useState([]);
    const [escultorName, setEscultorName] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarEscultor = async () => {
            try {
                const data = await getEscultorPorId(id);
                setEsculturas(data.works || []); // Esculturas asociadas
                setEscultorName(data.name); // Nombre del escultor
                setLoading(false);
            } catch (error) {
                setError('No se pudieron cargar las esculturas.');
                setLoading(false);
            }
        };
        cargarEscultor();
    }, [id]);

    const handleEsculturaClick = (esculturaId) => {
        navigate(`/ver-escultura-public/${esculturaId}`);
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
                    Esculturas de {escultorName.toUpperCase()}
                </Typography>

                {esculturas.length === 0 ? (
                    <Typography variant="h6" textAlign="center" color="textSecondary" sx={{ mt: 4 }}>
                        Este escultor no tiene esculturas asignadas.
                    </Typography>
                ) : (
                    <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                        {esculturas.map((escultura) => (
                            <Card
                                key={escultura._id}
                                sx={{
                                    backgroundColor: '#fafafa',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    mb: 2,
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer',
                                    ':hover': { transform: 'scale(1.02)' },
                                }}
                                onClick={() => handleEsculturaClick(escultura._id)} // Usamos `_id` para redirigir correctamente
                            >
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#555' }}>
                                        {escultura.name || "Sin nombre"}
                                    </Typography>
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

export default DetalleEsculturas;
