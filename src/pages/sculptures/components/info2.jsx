import React from 'react';
import { Box, Typography } from '@mui/material';
import titleRectangle from '../../../assets/eventos/Rectangle-2.svg';
import textRectangle from '../../../assets/eventos/Rectangle-3.svg';

const Info2 = () => {
    return (
        <Box sx={{ backgroundColor: '#fff', color: 'black', padding: '20px' }}> {/* Fondo blanco */}
            {/* Título principal y fecha pegada */}
            <Box sx={{ marginBottom: '10px', marginTop: '-5px' }}>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', marginBottom: '0px' }}
                >
                    Concurso Internacional de Escultura
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ marginTop: '-10px', marginBottom: '5px' }}
                >
                    13 al 20 de julio de 2024
                </Typography>
            </Box>

            {/* SVG decorativo debajo del título */}
            <Box sx={{ position: 'relative', marginBottom: 2, textAlign: 'left' }}>
                <Box
                    component="img"
                    src={titleRectangle}
                    alt="Decorative Rectangle"
                    sx={{
                        position: 'absolute',
                        bottom: '1px',
                        left: 0,
                        width: '120px',
                    }}
                />
            </Box>

            {/* Subtítulo con SVG decorativo a la izquierda */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
                <Box
                    component="img"
                    src={textRectangle}
                    alt="Decorative Rectangle"
                    sx={{
                        marginRight: '16px',
                        width: '20px',
                        height: '40px',
                    }}
                />
                <Typography variant="body1" sx={{ lineHeight: '1.8' }}>
                    Nuevamente, grandes escultores del mundo en escena y en acción, trabajando a cielo abierto
                    y en público, esculpiendo piezas que tienen por destino las veredas de Resistencia.
                </Typography>
            </Box>
        </Box>
    );
};

export default Info2;
