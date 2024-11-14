import React from 'react';
import { Box, Typography, Avatar, Card, CardContent } from '@mui/material';
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
            <Box sx={{ overflow: 'hidden', borderRadius: '16px', width: '100%', textAlign: 'center' }}>
                <Avatar
                    src={image || 'https://via.placeholder.com/150'}
                    alt={title}
                    sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease',
                        ':hover': { transform: 'scale(1.05)' },
                    }}
                />
            </Box>

            <CardContent sx={{ textAlign: 'center', padding: '16px' }}>
                <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.1rem', mb: 1 }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                    {authorName}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SculptureCard;
