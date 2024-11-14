import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SculptureCard = ({ id, title, image, authorName }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ver-escultura-public/${id}`);
    };

    return (
        <Box 
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                maxWidth: 200,
                padding: 2,
                cursor: 'pointer',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
            }}
        >
            <Avatar
                src={image} 
                alt={title}
                sx={{ width: 120, height: 120, borderRadius: '8px' }}
            />
            <Typography variant="h6" sx={{ fontStyle: 'italic', textAlign: 'center', mt: 1 }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray', textAlign: 'center' }}>
                {authorName}
            </Typography>
        </Box>
    );
};

export default SculptureCard;
