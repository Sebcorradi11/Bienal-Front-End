import React from 'react';
import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import fondoBoton from '../assets/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom';

const EventoButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/crear-evento');
    };

    return (
        <Box
            sx={{
                marginBottom: 2,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                    fontWeight: 'bold',
                    height: '60px',
                    width: { xs: '100%', sm: '300px' },
                    borderRadius: '12px',
                    backgroundImage: `url(${fondoBoton})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    textTransform: 'none',
                    gap: 1,
                    '&:hover': {
                        opacity: 0.9,
                    },
                }}
                startIcon={<AddIcon />}
            >
                Crear Evento
            </Button>
        </Box>
    );
};

export default EventoButton;
