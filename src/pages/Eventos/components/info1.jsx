import React from 'react';
import { Box, Typography } from '@mui/material';
import titleRectangle from '../../../assets/eventos/Rectangle-2.svg';
import textRectangle from '../../../assets/eventos/Rectangle-3.svg';
import BackgroundImage from '../../../assets/sculptor/Sculptor.svg';

const Info1 = () => {
    return (
        <Box sx={{ backgroundColor: '#fff', color: 'black' }}>
            {/* Imagen de fondo SVG */}
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    mb: 3, // margen inferior para separar la imagen de fondo del resto del contenido
                }}
            >
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

            <Box sx={{ padding: '0px 20px' }}>
            <Typography
                        variant="h4"
                        sx={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '0px' }}
                    >
                    Historia de los Concursos de Escultura
                </Typography>

                {/* Título con SVG debajo */}
                <Box sx={{ position: 'relative', mb: 2, textAlign: 'left' }}>
                    <Box
                        component="img"
                        src={titleRectangle}
                        alt="Decorative Rectangle"
                        sx={{
                            position: 'absolute',
                            bottom: '-10px', // Ajusta la posición del SVG
                            left: 0,
                            width: '120px', // Ajusta el tamaño del SVG según sea necesario
                        }}
                    />
                </Box>

                {/* Subtítulo con SVG a la izquierda */}
                <Box sx={{ display: 'flex', alignItems: 'top', mt: 3, mb: -1 }}>
                    <Box
                        component="img"
                        src={textRectangle}
                        alt="Decorative Rectangle"
                        sx={{
                            marginRight: '16px', // Espacio entre el SVG y el subtítulo
                            width: '20px', // Ajusta el tamaño del SVG según sea necesario
                            height: '40px', // Ajusta el tamaño según la altura del subtítulo
                        }}
                    />
                    <Box sx={{ maxWidth: '850px' }}>
                        <Typography variant="body1" sx={{ lineHeight: '1.8', fontStyle: 'Work Sans' }}>
                            Explora la historia y el futuro de la Bienal del Chaco. Aquí podrás sumergirte en los eventos que han dado vida a este icónico encuentro de arte, reviviendo todas sus ediciones desde 1988, descubriendo el presente de la Bienal 2024 y anticipando lo que nos esperan en las próximas ediciones.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Info1;
