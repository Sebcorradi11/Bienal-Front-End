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
                maxWidth: 250,
                padding: 2,
                cursor: 'pointer',
                borderRadius: '16px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
                },
                margin: 'auto',
            }}
        >
            <Box sx={{ overflow: 'hidden', borderRadius: '50%', marginTop: 2 }}>
                <Avatar
                    src={image || 'https://via.placeholder.com/150'}
                    alt={name}
                    sx={{
                        width: 100,
                        height: 100,
                        transition: 'transform 0.3s ease',
                        ':hover': { transform: 'scale(1.05)' },
                    }}
                />
            </Box>

            <CardContent sx={{ textAlign: 'center', padding: '16px' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1.1rem' }}>
                    {name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    {flag && <img src={flag} alt={country} style={{ width: 24, height: 16 }} />}
                    <Typography variant="body2" color="text.secondary">
                        {country}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default SculptorCard;
