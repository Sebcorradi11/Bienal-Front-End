import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nologged } from '../../../store/voteSlice';
import { vote } from '../../../api/votacion.routes';
import { ToastContainer, toast } from 'react-toastify';
import { getEscultorPorId } from '../../../api/Sculptores/sculptoresApi';
import LoaderSpinner from '../../../components/LoaderSpinner';
import 'react-toastify/dist/ReactToastify.css';

const SculptorVote = ({ evento, id_escultor }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const [voted, setVoted] = useState(false);
    const { isAuthenticated, email } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [escultor, setEscultor] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state for LoaderSpinner
    const [error, setError] = useState(null);

    const handleVote = (value) => {
        setRating(value);
    };

    useEffect(() => {
        const cargarEscultor = async () => {
            try {
                setLoading(true);
                const data = await getEscultorPorId(id_escultor);
                setEscultor(data);
                localStorage.setItem('escultor', JSON.stringify(data)); // Store sculptor in localStorage
            } catch (error) {
                setError('No se pudo cargar el escultor.');
            } finally {
                setLoading(false);
            }
        };

        const storedEscultor = JSON.parse(localStorage.getItem('escultor'));
        if (storedEscultor && storedEscultor._id === id_escultor) {
            setEscultor(storedEscultor);
            setLoading(false);
        } else {
            cargarEscultor();
        }
    }, [id_escultor]);

    const handleSubmit = () => {
        if (isAuthenticated) {
            const body = {
                userId: email,
                sculptorId: id_escultor,
                eventId: evento,
                score: rating
            };
            vote(body)
                .then(response => {
                    toast.success("Voto registrado con éxito!");
                    setVoted(true);
                })
                .catch(error => {
                    console.error('Error al enviar el voto:', error);
                    toast.error("Hubo un error al enviar el voto. " + (error.response?.data?.error || ''));
                });
        } else {
            dispatch(nologged({
                event: evento,
                sculptor: id_escultor,
                email: email,
                puntuation: rating
            }));
            navigate('/login');
        }
    };

    if (loading) {
        return <LoaderSpinner loading={loading} size={60} color="#3f51b5" />;
    }

    if (error) {
        return <Typography variant="h6" color="error" textAlign="center">{error}</Typography>;
    }

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <ToastContainer />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <Box sx={{ textAlign: 'left', maxWidth: '600px', paddingRight: '20px' }}>
                    <Typography variant="h1" sx={{ fontWeight: 'bold', color:'#000' }}>
                        {escultor?.name || 'Escultor Desconocido'}
                    </Typography>
                    <Typography variant="h3" sx={{ fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', marginBottom: 2 }}>
                        {escultor?.country || 'País desconocido'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 4 }}>
                        ¡Tu opinión cuenta! Calificá a tu escultor favorito de la Bienal del Chaco otorgando entre 1 y 5 estrellas.
                    </Typography>

                    {!voted ? (
                        <>
                            <Grid container justifyContent="center" spacing={4}>
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <Grid item key={value}>
                                        <IconButton onClick={() => handleVote(value)}>
                                            {value <= rating ? (
                                                <StarIcon fontSize="inherit" sx={{ color: 'gold', fontSize: 60 }} />
                                            ) : (
                                                <StarBorderIcon fontSize="inherit" sx={{ color: 'gray', fontSize: 60 }} />
                                            )}
                                        </IconButton>
                                    </Grid>
                                ))}
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                sx={{ marginTop: 3 }}
                            >
                                Enviar Voto
                            </Button>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5" sx={{ marginTop: 3 }}>
                                Has votado {rating} estrella{rating > 1 ? 's' : ''} ⭐
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => navigate('/')}
                                sx={{ marginTop: 3 }}
                            >
                                Ir al inicio
                            </Button>
                        </>
                    )}
                </Box>

                <Box sx={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', marginLeft: '20px' }}>
                    <img
                        src={escultor?.profileImage || 'https://via.placeholder.com/300'}
                        alt="Perfil del Escultor"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default SculptorVote;
