import React from 'react';
import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import fondoBoton from '../assets/fondobutton/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom';

const ButtonNavigate = ({ name, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route); // Navega a la ruta proporcionada
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
                {name} {/* Mostrar el texto que se pasa como prop */}
            </Button>
        </Box>
    );
};

export default ButtonNavigate;
