import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SculptorCard = ({ name, country, image, flag, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ver-escultor/${id}`); // Redirige al usuario a la página del escultor al hacer clic en la tarjeta
    };

    return (
        <Box
            onClick={handleClick} // Navegación al hacer clic en cualquier parte de la tarjeta
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                maxWidth: 150,
                padding: 2,
                cursor: 'pointer', // Indica que la tarjeta es clickeable
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