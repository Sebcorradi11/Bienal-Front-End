import React from 'react';
import { Card, CardContent, Avatar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SculptureCard = ({ id, title, image, authorName }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ver-escultura-public/${id}`);
    };

    return (
        <Card
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                maxWidth: 350, // Aumenta el ancho de la tarjeta
                padding: 4,
                cursor: 'pointer',
                borderRadius: '20px', // Hace que los bordes sean más redondeados
                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
                },
                margin: '20px', // Espacio adicional entre las tarjetas
            }}
        >
            <Box sx={{ overflow: 'hidden', borderRadius: '50%', marginTop: 2 }}>
                <Avatar
                    src={image || 'https://via.placeholder.com/150'}
                    alt={title}
                    sx={{
                        width: 140, // Aumenta el tamaño de la imagen
                        height: 140,
                        transition: 'transform 0.3s ease',
                        ':hover': { transform: 'scale(1.1)' },
                    }}
                />
            </Box>

            <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 2, fontSize: '1.5rem' }}>
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                        {authorName}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default SculptureCard;
