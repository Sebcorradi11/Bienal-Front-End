import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SculptorCard = ({ id, name, country, image, flag }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ver-escultores-public/${id}`);
    };

    return (
        <Box 
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                maxWidth: 150,
                padding: 2,
                cursor: 'pointer',
            }}
        >
            <Avatar
                src={image} // Usar la imagen completa
                alt={name}
                sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h6">{name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {flag && <img src={flag} alt={country} style={{ width: 20 }} />}
                <Typography variant="body2">{country}</Typography>
            </Box>
        </Box>
    );
};

export default SculptorCard;
