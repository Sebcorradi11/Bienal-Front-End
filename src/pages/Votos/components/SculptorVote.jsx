import React, { useState } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const SculptorVote = () => {
    const [rating, setRating] = useState(0);

    const handleVote = (value) => {
        setRating(value);
    };

    const handleSubmit = () => {
        // Aquí puedes manejar la lógica para enviar el voto
        console.log('Voto enviado:', rating);
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                Luis Bernardi
            </Typography>
            <Typography variant="h5" sx={{ fontStyle: 'italic', marginBottom: 2 }}>
                Argentina
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
                ¡Tu opinión cuenta! Calificá a tu escultor favorito de la Bienal del Chaco otorgando entre 1 y 5 estrellas.
            </Typography>
            <Grid container justifyContent="center" spacing={1}>
                {[1, 2, 3, 4, 5].map((value) => (
                    <Grid item key={value}>
                        <IconButton onClick={() => handleVote(value)}>
                            {value <= rating ? (
                                <StarIcon fontSize="large" />
                            ) : (
                                <StarBorderIcon fontSize="large" />
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
        </Box>
    );
};

export default SculptorVote;
