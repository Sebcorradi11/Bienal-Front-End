import React from 'react';
import { Box, Typography } from '@mui/material';
import predioImage from '../../../assets/home/Predio-1.webp'; // Asegúrate de que esta ruta sea correcta

const Predio = () => {
    return (
<Box
    sx={{
        backgroundImage: `url(${predioImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '0% 25%',
        height: '62vh', // Ajustado a 60% del alto de la pantalla
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'white',
        textAlign: 'left',
        flexDirection: 'column',
        paddingLeft: '50px', // Espacio del borde izquierdo
        paddingTop: '40px', // Espacio del borde superior
    }}
>
    <Box sx={{ width: { xs: '80%', sm: '70%', md: '45%' }, marginLeft: { xs: '-1rem', sm: '3rem', md: '5rem' } }}>
        <Typography
            variant="h2"
            sx={{
                fontSize: { xs: '32px', sm: '48px', md: '64px' },
                fontWeight: '500',
                lineHeight: 1.2,
            }}
        >
            <span
                style={{
                    fontWeight: '400',
                    fontFamily: 'Instrument Serif, serif',
                    fontStyle: 'italic',
                    fontSize: { xs: '36px', sm: '54px', md: '69px' },
                }}
            >
                Bienal
            </span>{" "}
            del Chaco{" "}
            <span
                style={{
                    fontWeight: '400',
                    fontFamily: 'Instrument Serif, serif',
                    fontStyle: 'italic',
                    fontSize: { xs: '36px', sm: '54px', md: '69px' },
                }}
            >
                2024
            </span>{" "}
            del 13 al 21 de{" "}
            <span
                style={{
                    fontWeight: '400',
                    fontFamily: 'Instrument Serif, serif',
                    fontStyle: 'italic',
                    fontSize: { xs: '36px', sm: '54px', md: '69px' },
                }}
            >
                Julio
            </span>
        </Typography>
    </Box>
</Box>
    );
};

export default Predio;
