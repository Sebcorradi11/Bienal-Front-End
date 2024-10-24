import React from 'react';
import { Box, Grid, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { useState, useEffect, Children, ReactComponentElement } from 'react';

// Importaciones correctas de los SVGs
import sculptorIcon from '../../../assets/home/Rectangle.svg';
import sculpturesIcon from '../../../assets/home/Ellipse.svg';
import eventsIcon from '../../../assets/home/Star.svg';

// Creo un box de forma que necesita como parametro el texto de las lineas 1, 2 y 3... Y la imagen.
const Forma = ({l1, l2, l3, imagen, src}) => {

    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    // Handler para actualizar la posicion del mouse cuando se mueve
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xAxis = (innerWidth / 2 - e.clientX) / 60;
      const yAxis = (innerHeight / 2 - e.clientY) / 20;
      setRotation({ x: yAxis, y: -xAxis });
    };
  
    // Cuando se mueve el mouse, activamos mousMove
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
  
      // Cerramos el event listener
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    return(<a href={src} style={{textDecoration: 'none'}}><Box
        sx={{
            width: { xs: '150px', sm: '250px' }, // Responsivo
            height: { xs: '150px', sm: '250px' },
            backgroundImage: `url(${imagen})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
                transform: 'scale(1.02)', 
                cursor: 'pointer', 
            },
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: 'transform 0.1s',
            perspective: '1000px',
        }}
    >
        <Typography
            variant="h5"
            sx={{ lineHeight:'25px', color: 'white', fontWeight: '400', fontSize: { xs: '30px', sm: '30px' } }} // Ajuste del tamaño de texto
        >
            {l1}<br></br>{l2}<br></br><span style={{ lineHeight: '35px',fontWeight:'400', fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '38px' }}>{l3}</span>
        </Typography>
    </Box></a>)
}

//Los tipos de props que necesita Forma
Forma.propTypes = {
    l1: PropTypes.string.isRequired,
    l2: PropTypes.string.isRequired,
    l3: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    src: PropTypes.string
};

const Formas = () => {

    return (
        <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
            {/* Grid para los 3 SVGs */}
            <Grid
                container
                justifyContent="center"
                spacing={4  } // Agrego un pequeño spacing por si ayuda en ciertos casos
                sx={{
                    '@media (min-width: 600px)': { gap: '5rem' }, // Ajuste de separación para pantallas más grandes
                    '@media (max-width: 600px)': { gap: '2rem' }, // Menor separación en pantallas pequeñas
                }}
            >
                {/* Primer SVG */}
                <Grid item>
                    <Forma l1={'Conocé'} l2={'a los'} l3={'Escultores'} imagen={sculptorIcon} src={'./'}/>
                </Grid>

                {/* Segundo SVG */}
                <Grid item>
                    <Forma l1={'Conocé'} l2={'las'} l3={'Esculturas'} imagen={sculpturesIcon} src={'./'}/>
                </Grid>

                {/* Tercer SVG */}
                <Grid item> 
                    <Forma l1={'Conocé'} l2={'nuestros'} l3={'Eventos'} imagen={eventsIcon} src={'./'}/>
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
                            backgroundColor: '#D9D9D9', // Color gris personalizado
                            borderRadius: '30px',
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Formas;
