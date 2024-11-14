// src/pages/Sculptor/components/Info.jsx
import React from 'react';
import { Box,} from '@mui/material';
import BackgroundImage from '../../../assets/sculptor/Sculptor.svg'; // Asegúrate de colocar correctamente la ruta del SVG

const Info = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#fff'
            }}
        >
            {/* Imagen de fondo SVG */}
            <Box
                component="img"
                src={BackgroundImage}
                alt="Bienal Internacional de Escultura"
                sx={{
                    width: '100%',
                    height: 'auto',
                }}
            />
        </Box>
    );
};

export default Info;
