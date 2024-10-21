// src/components/VoteSculpture.jsx
import React, { useState } from 'react';
import { Box, Button, Typography, Rating } from '@mui/material';

const VoteSculpture = ({ sculptureId, onVote }) => {
    const [rating, setRating] = useState(0);

    const handleVote = () => {
        if (rating > 0) {
            onVote(sculptureId, rating);
        } else {
            alert('Por favor selecciona una puntuación antes de votar.');
        }
    };

    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h6">Vota por tus esculturas favoritas</Typography>
            <Rating
                name="sculpture-rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                precision={1}
                max={5}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleVote}>
                Enviar Voto
            </Button>
        </Box>
    );
};

export default VoteSculpture;
