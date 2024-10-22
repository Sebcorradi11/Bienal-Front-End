import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import logoBienal from '../assets/bienal.webp';
import cuencaLogo from '../assets/cuenca.webp';
import logoChaco from '../assets/logochaco.webp';
import unescoLogo from '../assets/uneesco.webp';
import urundayLogo from '../assets/urunday.webp'; // Logo de Fundación Urunday

const Footer = () => {
    const handleExternalLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer'); // Abre en nueva pestaña
    };

    return (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Sección blanca del footer */}
            <Box sx={{ backgroundColor: '#fff', py: 2 }}>
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="space-between" spacing={3}>
                        {/* Bienal del Chaco */}
                        <Grid item xs={12} sm={3} display="flex" alignItems="center" gap={2}>
                            <img
                                src={logoBienal}
                                alt="Bienal del Chaco"
                                style={{ height: '50px' }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 'bold', color: '#000' }}
                            >
                                Bienal del Chaco
                            </Typography>
                        </Grid>

                        {/* Gobierno del Chaco y Fundación Urunday */}
                        <Grid item xs={12} sm={6} display="flex" justifyContent="center" gap={4}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <img
                                    src={logoChaco}
                                    alt="Gobierno del Chaco"
                                    style={{ height: '50px' }}
                                />
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000' }}>
                                    Gobierno del Chaco
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <img
                                    src={urundayLogo}
                                    alt="Fundación Urunday"
                                    style={{ height: '50px' }}
                                />

                            </Box>
                        </Grid>

                        {/* Unesco */}
                        <Grid item xs={12} sm={3} display="flex" justifyContent="flex-end" alignItems="center" gap={2}>
                            <img
                                src={unescoLogo}
                                alt="Unesco"
                                style={{ height: '50px' }}
                            />
                            <Typography variant="body2" sx={{ color: '#000' }}>
                                Unesco, Comisión Nacional Argentina
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Sección negra del footer */}
            <Box sx={{ backgroundColor: '#000', py: 1, color: 'white' }}>
                <Container maxWidth="lg">
                    <Grid container alignItems="center">
                        <Grid item xs={12} display="flex" alignItems="center" gap={2}>
                            <img
                                src={cuencaLogo}
                                alt="Universidad de la Cuenca del Plata"
                                style={{ height: '40px', cursor: 'pointer' }}
                                onClick={() => handleExternalLink('https://www.ucp.edu.ar/')}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
