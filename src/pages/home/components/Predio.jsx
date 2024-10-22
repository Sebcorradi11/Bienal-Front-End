import React from 'react';
import { Box, Typography } from '@mui/material';
import predioImage from '../../../assets/home/Predio-1.webp'; // Asegúrate de que esta ruta sea correcta

const Predio = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${predioImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '60vh', // Ajustado a 60% del alto de la pantalla
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start', // Alinea el contenido hacia el borde superior
                color: 'white',
                textAlign: 'left',
                flexDirection: 'column',
                paddingLeft: '50px', // Espacio del borde izquierdo
                paddingTop: '40px', // Espacio del borde superior
            }}
        >
            <Box sx={{ width: '50%', marginLeft: '15rem' }}>
            <Typography variant="h2" sx={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '4rem' }}>
                Bienal del Chaco 2024
            </Typography>
            <Typography variant="h4" sx={{ mt: 2 }}>
                del 13 al 21 de Julio
            </Typography>
            </Box>
        </Box>
    );
};

export default Predio;
