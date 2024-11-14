// SculptorCard.jsx
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SculptorCard = ({ name, country, image, flag, id }) => {
    const navigate = useNavigate(); // Definir navigate

    const handleClick = () => {
        navigate(`/ver-escultores/${id}`); // Usar id en la ruta
    };

    return (
        <Box 
            onClick={handleClick}
            sx={{
                display: 'flex',
                cursor: 'pointer',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                maxWidth: 150,
                padding: 2,
            }}
        >
            <Avatar
                src={`/images/${image}`}
                alt={name}
                sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h6">{name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={flag} alt={country} style={{ width: 20 }} />
                <Typography variant="body2">{country}</Typography>
            </Box>
        </Box>
    );
};

export default SculptorCard;
