import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';// Grid2 para la nueva versión de Material-UI

import logoBienal from '../assets/footer/bienal.webp';
import cuencaLogo from '../assets/footer/cuenca.webp';
import logoChaco from '../assets/footer/logochaco.webp';
import unescoLogo from '../assets/footer/uneesco.webp';
import urundayLogo from '../assets/footer/urunday.webp';

const Footer = () => {
    const handleExternalLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box sx={{ position: 'relative', zIndex: 1, }}>
            {/* Sección blanca del footer */}
            <Box sx={{ backgroundColor: '#fff', py: 1 }}>
                <Grid2
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-evenly"
                    sx={{ textAlign: { xs: 'center', md: 'left' } }}
                >
                    {/* Logo Bienal del Chaco */}
                    <Grid2 xs={12} sm={6} md={2} display="flex" flexDirection="column" alignItems="center">
                        <img
                            src={logoBienal}
                            alt="Bienal del Chaco"
                            style={{ height: '60px' }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                            Bienal del Chaco
                        </Typography>
                    </Grid2>

                    {/* Logo Gobierno del Chaco */}
                    <Grid2 xs={12} sm={6} md={2} display="flex" flexDirection="column" alignItems="center">
                        <img
                            src={logoChaco}
                            alt="Gobierno del Chaco"
                            style={{ height: '60px' }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                            Gobierno del Chaco
                        </Typography>
                    </Grid2>

                    {/* Fundación Urunday + Texto */}
                    <Grid2 xs={12} sm={6} md={4} display="flex" alignItems="center" gap={2}>
                        <img
                            src={urundayLogo}
                            alt="Fundación Urunday"
                            style={{ height: '60px' }}
                        />
                        <Box display="flex" flexDirection="column">
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                Resistencia, la Ciudad de las Esculturas.
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                                Resistencia, the City of Sculptures.
                            </Typography>
                        </Box>
                    </Grid2>

                    {/* Unesco */}
                    <Grid2 xs={12} sm={6} md={2} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                            Con el auspicio de:
                        </Typography>
                        <img
                            src={unescoLogo}
                            alt="Unesco"
                            style={{ height: '60px' }}
                        />
                        <Typography
                            variant="body2"
                            sx={{ textAlign: 'center', marginTop: '8px' }}
                        >
                            Comisión Nacional Argentina
                        </Typography>
                    </Grid2>
                </Grid2>
            </Box>

            {/* Sección negra del footer */}
            <Box sx={{ backgroundColor: '#000', py: 2, color: 'white' }}>
                <Grid2 container alignItems="center" justifyContent="flex-start" sx={{marginLeft: '40px'}} >
                    <Grid2>
                        <a href='https://www.ucp.edu.ar/' target='_blank'>
                        <img
                            src={cuencaLogo}
                            alt="Universidad de la Cuenca del Plata"
                            style={{ height: '60px', cursor: 'pointer' }}
                        />
                        </a>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    );
};

export default Footer;
