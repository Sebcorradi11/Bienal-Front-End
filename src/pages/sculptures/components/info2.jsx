import React from 'react';
import { Box, Typography } from '@mui/material';

const Info2 = () => {
    return (
        <Box
            sx={{
                margin: 0,
                padding: 0,
                backgroundColor: '#fff', // Fondo blanco para eliminar cualquier borde gris
            }}
        >
            <Box
                sx={{
                    maxWidth: '100%',
                    margin: '0 auto', // Centra el contenido horizontalmente
                    paddingTop: 0, // Asegura que no haya padding extra superior
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    Concurso Internacional de Escultura
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    13 al 20 de julio de 2024
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    Nuevamente, grandes escultores del mundo en escena y en acción, trabajando a cielo abierto
                    y en público, esculpiendo piezas que tienen por destino las veredas de Resistencia.
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Participan 10 Escultores <br />
                    Material: Metal
                </Typography>
            </Box>
        </Box>
    );
};

export default Info2;