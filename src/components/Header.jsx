import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useSelector } from 'react-redux'; // Importamos useSelector para acceder al estado de Redux
import { useNavigate } from 'react-router-dom';
import logo from '../assets/footer/bienal.webp';

const Header = () => {
    const navigate = useNavigate();

    // Obtenemos el estado del usuario desde Redux
    const { username } = useSelector((state) => state.user);

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

                {/* Avatar y nombre del usuario */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                        {username ? username.charAt(0).toUpperCase() : <AccountCircle />}
                    </Avatar>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        {username || 'Usuario'}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>

    );
};

export default Header;