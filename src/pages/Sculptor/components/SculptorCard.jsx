import React from 'react';
import { Box, Typography, Avatar, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SculptorCard = ({ id, name, country, image, flag }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ver-escultores-public/${id}`);
    };

    return (
        <Card
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                maxWidth: { xs: '100%', sm: 200, md: 300 }, // Responsivo en pantallas pequeñas y medianas
                padding: { xs: 2, sm: 4 }, // Reduce el padding en pantallas pequeñas
                cursor: 'pointer',
                borderRadius: '20px',
                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
                },
                margin: '10px',
                width: { xs: '100%', sm: 'auto' } // Ancho completo en pantallas pequeñas
            }}
        >
            <Box sx={{ overflow: 'hidden', borderRadius: '50%', marginTop: 2 }}>
                <Avatar
                    src={image || 'https://via.placeholder.com/150'}
                    alt={name}
                    sx={{
                        width: { xs: 100, sm: 140 }, // Tamaño del avatar según el tamaño de la pantalla
                        height: { xs: 100, sm: 140 },
                        transition: 'transform 0.3s ease',
                        ':hover': { transform: 'scale(1.1)' },
                    }}  
                />
            </Box>

            <CardContent sx={{ textAlign: 'center', padding: { xs: 1, sm: 2 } }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                    {name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    {flag && <img src={flag} alt={country} style={{ width: 16, height: 20 }} />}
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
                        {country}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default SculptorCard;
