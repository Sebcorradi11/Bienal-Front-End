// SculptorCard.jsx
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const SculptorCard = ({ name, country, image, flag }) => {
    return (
        <Box
            sx={{
                display: 'flex',
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
