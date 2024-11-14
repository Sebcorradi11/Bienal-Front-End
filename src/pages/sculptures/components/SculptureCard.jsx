import React from 'react';
import { Card, CardMedia, Typography, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SculptureCard = ({id, title, image, authorName }) => {
    const navigate = useNavigate(); // Definir navigate usando useNavigate

    const handleClick = () => {
        navigate(`/ver-escultura-public/${id}`);
    };

    return (
        <Card 
            onClick={handleClick}
            sx={{ 
                position: 'relative', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                width: '300px', 
                height: '400px', 
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' 
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ height: '70%', objectFit: 'cover' }}
            />
            <Box sx={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                backgroundColor: 'black', 
                padding: '8px', 
                color: 'white', 
                width: '100%', 
                boxSizing: 'border-box' 
            }}>
                <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {authorName}
                </Typography>
                <IconButton
                    aria-label="Ver escultura"
                    sx={{ color: 'white', position: 'absolute', top: 8, right: 8 }}
                >
                    {/* Puedes añadir un icono aquí si lo deseas */}
                </IconButton>
            </Box>
        </Card>
    );
};

export default SculptureCard;
