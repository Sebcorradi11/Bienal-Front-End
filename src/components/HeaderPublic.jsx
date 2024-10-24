import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import Bienal from '../assets/footer/bienal.webp';

const HeaderPublic = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const linkStyles = ({ isActive }) => ({
        textDecoration: 'none',
        color: isActive ? 'black' : 'white',
        backgroundColor: isActive ? 'white' : 'transparent',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '16px',
        fontWeight: isActive ? 'bold' : 'normal',
        cursor: 'pointer',
    });

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#000',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                padding: 0,
                boxSizing: 'border-box',
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingX: '16px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/')}
                >
                    <img
                        src={Bienal}
                        alt="Bienal del Chaco"
                        style={{ height: '40px', marginRight: '8px' }}
                    />
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', fontSize: '18px', color: '#fff' }}
                    >
                        Bienal del Chaco
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: 2 }}>
                    {!isMobile ? (
                        <>
                            <NavLink to="/escultores" style={linkStyles}>
                                Escultores
                            </NavLink>
                            <NavLink to="/esculturas" style={linkStyles}>
                                Esculturas
                            </NavLink>
                            <NavLink to="/eventos" style={linkStyles}>
                                Eventos
                            </NavLink>
                            <IconButton onClick={() => navigate('/login')} sx={{ padding: 0 }}>
                                <Avatar
                                    src="/assets/avatar-default.webp"
                                    sx={{ width: 32, height: 32 }}
                                />
                            </IconButton>
                        </>
                    ) : (
                        <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Box>

                <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/escultores')}>
                                <ListItemText primary="Escultores" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/esculturas')}>
                                <ListItemText primary="Esculturas" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/eventos')}>
                                <ListItemText primary="Eventos" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/login')}>
                                <ListItemText primary="Login" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderPublic;
