import React from 'react';
import { Box, Grid, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { useState, useEffect, Children, ReactComponentElement } from 'react';
import { motion } from "framer-motion";
// Importaciones correctas de los SVGs
import sculptorIcon from '../../../assets/home/Rectangle.svg';
import sculpturesIcon from '../../../assets/home/Ellipse.svg';
import eventsIcon from '../../../assets/home/Star.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import BuscadorHome from '../../../components/BuscadorHome';
// Creo un box de forma que necesita como parametro el texto de las lineas 1, 2 y 3... Y la imagen.
const Forma = ({l1, l2, l3, imagen, src}) => {
    const navigate = useNavigate();
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    // Handler para actualizar la posicion del mouse cuando se mueve
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xAxis = (innerWidth / 2 - e.clientX) / 90;
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

    return(<Box onClick={() => navigate(src)} sx={{ cursor: 'default', textDecoration: 'none', position: 'relative', display: 'inline-block' }}>
        <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: { xs: '150px', sm: '250px' },
                    height: { xs: '150px', sm: '250px' },
                    backgroundImage: `url(${imagen})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: 'transform 0.1s',
                    perspective: '1000px',
                }}
            />
        </motion.div>
        <Typography
        variant="h5"
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontWeight: '400',
            lineHeight: { xs: '4vw', sm: '4vh' }, // Ajusta el interlineado para diferentes tamaños de pantalla
            fontSize: { xs: '4vw', sm: '2vh', md: '2vh', lg: '1.5vw' }, // Ajusta el tamaño de fuente según el ancho de pantalla
            pointerEvents: 'none',
        }}
    >
        {l1}
        <br />
        {l2}
        <br />
        <span style={{ lineHeight: '1.2', fontWeight: '400', fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '1.5em' }}>
            {l3}
        </span>
    </Typography>
    </Box>    
    )
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
                    <Forma l1={'Conocé'} l2={'a los'} l3={'Escultores'} imagen={sculptorIcon} src={'/escultores'}/>
                </Grid>

                {/* Segundo SVG */}
                <Grid item>
                    <Forma l1={'Conocé'} l2={'las'} l3={'Esculturas'} imagen={sculpturesIcon} src={'/esculturas'}/>
                </Grid>

                {/* Tercer SVG */}
                <Grid item> 
                    <Forma l1={'Conocé'} l2={'nuestros'} l3={'Eventos'} imagen={eventsIcon} src={'/eventos'}/>
                </Grid>
            </Grid>

            {/* Buscador debajo */}
            <BuscadorHome />
        </Box>
    );
};

export default Formas;