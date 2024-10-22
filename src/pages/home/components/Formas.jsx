import React from 'react';
import { Box, Grid, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Importaciones correctas de los SVGs
import sculptorIcon from '../../../assets/home/Rectangle.svg';
import sculpturesIcon from '../../../assets/home/Ellipse.svg';
import eventsIcon from '../../../assets/home/Star.svg';

const Formas = () => {
    return (
        <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
            {/* Grid para los 3 SVGs */}
            <Grid 
                container 
                justifyContent="center"
                spacing={4} // Agrego un pequeño spacing por si ayuda en ciertos casos
                sx={{ 
                    '@media (min-width: 600px)': { gap: '5rem' }, // Ajuste de separación para pantallas más grandes
                    '@media (max-width: 600px)': { gap: '2rem' }, // Menor separación en pantallas pequeñas
                }}
            >
                {/* Primer SVG */}
                <Grid item>
                    <Box
                        sx={{
                            width: { xs: '150px', sm: '250px' }, // Ajusta el tamaño en pantallas pequeñas y medianas
                            height: { xs: '150px', sm: '250px' },
                            borderRadius: '50%',
                            backgroundImage: `url(${sculptorIcon})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography 
                            variant="h5" 
                            sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' } }} // Ajuste del tamaño de texto
                        >
                            Conocé a los Escultores
                        </Typography>
                    </Box>
                </Grid>

                {/* Segundo SVG */}
                <Grid item>
                    <Box
                        sx={{
                            width: { xs: '150px', sm: '250px' }, // Responsivo
                            height: { xs: '150px', sm: '250px' },
                            borderRadius: '50%',
                            backgroundImage: `url(${sculpturesIcon})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography 
                            variant="h5" 
                            sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' } }}
                        >
                            Conocé las Esculturas
                        </Typography>
                    </Box>
                </Grid>

                {/* Tercer SVG */}
                <Grid item>
                    <Box
                        sx={{
                            width: { xs: '150px', sm: '250px' }, // Responsivo
                            height: { xs: '150px', sm: '250px' },
                            borderRadius: '50%',
                            backgroundImage: `url(${eventsIcon})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography 
                            variant="h5" 
                            sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' } }}
                        >
                            Conocé nuestros Eventos
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Buscador debajo */}
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <TextField
                    variant="outlined"
                    placeholder="Buscar nombre de escultor o Escultura..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        sx: {
                            width: '400px',
                            backgroundColor: '#AAAAAA', // Color gris personalizado
                            borderRadius: '30px',
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Formas;
