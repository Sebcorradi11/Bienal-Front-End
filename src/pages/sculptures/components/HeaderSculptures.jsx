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
import { useNavigate, useLocation } from 'react-router-dom'; // Importar useLocation
import Bienal from '../../../assets/footer/bienal.webp';

const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setDrawerOpen(false);
    };

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
                disableGutters // Elimina los márgenes internos predeterminados del Toolbar
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingX: '16px',
                }}
            >
                {/* Logo a la izquierda */}
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

                {/* Enlaces y Avatar a la derecha */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 'auto',
                        gap: 2,
                    }}
                >
                    {!isMobile ? (
                        <>
                            <Typography
                                variant="body1"
                                sx={{ cursor: 'pointer', color: '#fff', fontSize: '16px' }}
                                onClick={() => navigate('/escultores')}
                            >
                                Escultores
                            </Typography>
                            <Typography
                        variant="body1"
                        sx={{
                            cursor: 'pointer',
                            color: location.pathname === '/esculturas' ? '#000' : '#fff',
                            backgroundColor: location.pathname === '/esculturas' ? '#fff' : 'transparent', 
                            padding: '3px 6px', 
                            borderRadius: '15px', 
                            fontSize: '16px',
                        }}
                        onClick={() => navigate('/esculturas')}
                    >
                        Esculturas
                    </Typography>
                            <Typography
                                variant="body1"
                                sx={{ cursor: 'pointer', color: '#fff', fontSize: '16px' }}
                                onClick={() => navigate('/eventos')}
                            >
                                Eventos
                            </Typography>
                            <IconButton
                                onClick={() => navigate('/login')}
                                sx={{ padding: 0 }}
                            >
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

                {/* Drawer para pantallas pequeñas */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/escultores')}>
                                <ListItemText primary="Escultores" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/esculturas')}>
                                <ListItemText primary="Esculturas" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/eventos')}>
                                <ListItemText primary="Eventos" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/login')}>
                                <ListItemText primary="Login" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
