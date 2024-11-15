import React from 'react';
import { Card, CardContent, Avatar, Typography, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Función para truncar el texto
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

const SculptureCard = ({ id, title, image, authorName }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ver-escultura-public/${id}`);
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card
                onClick={handleClick}
                sx={{
                    backgroundColor: '#fff', // Fondo blanco
                    width: 250,
                    height: 350,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    ':hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
                    },
                    margin: '20px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 2,
                    }}
                >
                    <Avatar
                        src={image || 'https://via.placeholder.com/150'}
                        alt={title}
                        sx={{
                            width: 180,
                            height: 180,
                            borderRadius: '50%',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </Box>

                <CardContent
                    sx={{
                        textAlign: 'center',
                        padding: '16px',
                        width: '100%',
                        height: '150px',
                        overflow: 'hidden',
                    }}
                >
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: 2 }}
                    >
                        {truncateText(title, 10)} {/* Trunca el título a 10 caracteres */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {authorName}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SculptureCard;
