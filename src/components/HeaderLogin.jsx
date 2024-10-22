import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/bienal.webp';

const HeaderLogin = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path); // Redirige a la ruta correspondiente
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#000', padding: '0 32px' }}>
            <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo y nombre del sitio */}
                <Box
                    sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => handleNavigation('/')}
                >
                    <img
                        src={logo}
                        alt="Bienal del Chaco"
                        style={{ height: '50px', marginRight: '8px' }}
                    />
                    <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                        Bienal del Chaco
                    </Typography>
                </Box>

                {/* Botón de registro o inicio de sesión (opcional) */}
                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{ cursor: 'pointer', color: 'white' }}
                        onClick={() => handleNavigation('/login')}
                    >
                        Volver al Inicio
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderLogin;
