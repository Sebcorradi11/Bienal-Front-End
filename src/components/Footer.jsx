import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import logoBienal from '../assets/footer/bienal.webp';
import cuencaLogo from '../assets/footer/cuenca.webp';
import logoChaco from '../assets/footer/logochaco.webp';
import unescoLogo from '../assets/footer/uneesco.webp';
import urundayLogo from '../assets/footer/urunday.webp'; // Logo de Fundación Urunday

const Footer = () => {
    const handleExternalLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer'); // Abre en nueva pestaña
    };

    return (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Sección blanca del footer */}
            <Box sx={{ backgroundColor: '#fff', py: 2 }}>
                <Box sx={{ width: '100%', padding: '0' }}> {/* Box que ocupa todo el ancho */}
                    <Grid container alignItems="center" justifyContent="space-between" spacing={3}>
                        {/* Columna de logos alineados a la izquierda */}
                        <Grid item xs={12} sm={9} display="flex" alignItems="center" gap={3}>
                            <Box display="flex" alignItems="center"> {/* Eliminado el gap */}
                                <img
                                    src={logoBienal}
                                    alt="Bienal del Chaco"
                                    style={{ height: '80px', marginRight: '8px' }} // Aumentado el tamaño del icono
                                />
                                <Typography
                                    variant="h5" // Aumentado el tamaño de la fuente
                                    sx={{ fontWeight: 'bold', color: '#000', marginLeft: '-50px' }}
                                >
                                    Bienal del Chaco
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" ml={3}>
                                <img
                                    src={logoChaco}
                                    alt="Gobierno del Chaco"
                                    style={{ height: '80px' }} // Aumentado el tamaño del icono
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000', marginLeft: '4px' }}>
                                    Gobierno del <br /> Chaco
                                </Typography> {/* Añadido el salto de línea */}
                            </Box>

                            {/* Fundación Urunday e información de Resistencia */}
                            <Box display="flex" alignItems="center" ml={3}>
                                <img
                                    src={urundayLogo}
                                    alt="Fundación Urunday"
                                    style={{ height: '80px' }} // Aumentado el tamaño del icono
                                />
                                <Box display="flex" flexDirection="column" ml={2}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000' }}>
                                        Resistencia, la Ciudad de las Esculturas.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#666' }}> {/* Aumentado el tamaño del texto */}
                                        Resistencia, the City of Sculptures.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Unesco alineado a la derecha con formato nuevo */}
                        <Grid item xs={12} sm={3} display="flex" justifyContent="flex-end" alignItems="center">
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="body1" sx={{ color: '#000', marginBottom: '8px' }}>
                                    Con el auspicio de:
                                </Typography>
                                <img
                                    src={unescoLogo}
                                    alt="Unesco"
                                    style={{ height: '80px' }} // Aumentado el tamaño del icono
                                />
                                <Typography variant="body1" sx={{ color: '#000', marginTop: '8px', textAlign: 'center' }}>
                                    Comisión Nacional Argentina
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Sección negra del footer */}
            <Box sx={{ backgroundColor: '#000', py: 1, color: 'white' }}>
                <Box sx={{ width: '100%', padding: '0' }}> {/* Box que ocupa todo el ancho */}
                    <Grid container alignItems="center" justifyContent="flex-start">
                        <Grid item xs={12} display="flex" alignItems="center" gap={2}>
                            <img
                                src={cuencaLogo}
                                alt="Universidad de la Cuenca del Plata"
                                style={{ height: '6rem', cursor: 'pointer', marginLeft: '3rem' }} // Aumentado el tamaño del icono
                                onClick={() => handleExternalLink('https://www.ucp.edu.ar/')}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
