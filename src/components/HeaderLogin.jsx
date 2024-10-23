import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeaderLogin = () => (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                padding: '10px',
            }}
        >
            <Typography variant="h6">Bienal del Chaco</Typography>
            <Box>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                    Volver al Inicio
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
);

export default HeaderLogin;
