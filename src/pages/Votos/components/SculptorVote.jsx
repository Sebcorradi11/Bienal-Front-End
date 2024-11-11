import React, { useState } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import SculptorImage from '../../../assets/vote/imagenPerfilEscultor.webp';  // Imagen del perfil del escultor
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nologged, voted } from '../../../store/voteSlice';


const SculptorVote = ({evento, id_escultor}) => {
    const dispatch = useDispatch();

    const [rating, setRating] = useState(0);
    const { isAuthenticated, email } = useSelector((state) => state.user);
    const navigate = useNavigate();  // Usar el hook useNavigate

    const handleVote = (value) => {
        setRating(value);
    };

    const handleSubmit = () => {
        if(isAuthenticated){
        console.log(isAuthenticated, email)
        console.log('Voto enviado:', rating, ' Evento: ', evento,' Escultor: ', id_escultor);
    }
    else{
        dispatch(nologged(({
            event: evento,
            sculptor: id_escultor,
            email: email,
            puntuation: rating
        })));
        console.log('No autenticado')
        navigate('/login');
    }
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>


            {/* Información del escultor */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <Box sx={{ textAlign: 'left', maxWidth: '600px', paddingRight: '20px' }}>
                    <Typography variant="h1" sx={{ fontWeight: 'bold', color:'#000' }}>
                        Luis Bernardi
                    </Typography>
                    <Typography variant="h3" sx={{ fontStyle: 'italic', fontFamily: 'Instrument Serif, serif', marginBottom: 2 }}>
                        Argentina
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 4 }}>
                        ¡Tu opinión cuenta! Calificá a tu escultor favorito de la Bienal del Chaco otorgando entre 1 y 5 estrellas.
                    </Typography>

                    {/* Rating con estrellas */}
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

                    {/* Botón de envío */}
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSubmit} 
                        sx={{ marginTop: 3 }}
                    >
                        Enviar Voto
                    </Button>
                </Box>

                {/* Imagen del perfil del escultor */}
                <Box sx={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', marginLeft: '20px' }}>
                    <img src={SculptorImage} alt="Perfil del Escultor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default SculptorVote;
