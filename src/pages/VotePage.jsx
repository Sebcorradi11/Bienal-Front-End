// src/pages/VotePage.jsx
import React, { useState } from 'react';
import { Container, Snackbar, Alert } from '@mui/material';
import VoteSculpture from '../components/VoteSculpture';

const VotePage = () => {
    const [voteSuccess, setVoteSuccess] = useState(false);

    const handleVote = (sculptureId, rating) => {
        // Aquí iría el código para enviar el voto al backend
        console.log(`Escultura ID: ${sculptureId}, Rating: ${rating}`);

        // Simular éxito
        setVoteSuccess(true);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <VoteSculpture sculptureId={1} onVote={handleVote} /> {/* ID de ejemplo */}

            {/* Snackbar para notificación de éxito */}
            <Snackbar
                open={voteSuccess}
                autoHideDuration={6000}
                onClose={() => setVoteSuccess(false)}
            >
                <Alert onClose={() => setVoteSuccess(false)} severity="success">
                    ¡Gracias por tu voto!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default VotePage;
