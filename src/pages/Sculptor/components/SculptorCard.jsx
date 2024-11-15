import React from 'react';
import { Box, Typography, Avatar, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Función para truncar el nombre si es demasiado largo (opcional)
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

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
                gap: 2,
                maxWidth: 250,
                height: 350,
                cursor: 'pointer',
                borderRadius: '20px',
                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
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
                    alt={name}
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
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginTop: 2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {truncateText(name, 12)} {/* Trunca el nombre si es demasiado largo */}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    {flag && <img src={flag} alt={country} style={{ width: 24, height: 24 }} />} {/* Tamaño del icono de bandera */}
                    <Typography variant="body2" color="text.secondary">
                        {country}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default SculptorCard;
