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
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import Bienal from '../assets/header/logo.svg';
import { handleLogout } from '../auth/AuthHanddler';
import { useDispatch, useSelector } from 'react-redux';

const HeaderPublic = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const dispatch = useDispatch();
    const { username, picture } = useSelector((state) => state.user); // Verifica si `username` está en el estado
    let name;
    if(!username){
        console.log("El usuario ha cerrado sesión correctamente.");
    } else {
        name = username.split(' ')[0];
    }


    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleUserLogout = () => {
        dispatch(handleLogout());
        navigate('/');
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
                            {username && <Typography sx={{ color: 'white' }}>{name}</Typography>}
                            <IconButton onClick={() => navigate('/login')} sx={{ padding: 0 }}>
                                    <Avatar
                                        src={picture ? picture : `/assets/avatar-default.webp`}
                                        sx={{marginLeft: '-10px' ,width: 32, height: 32 }}
                                    />
                            </IconButton>
                            {username && ( // Mostrar Logout si el usuario está autenticado
                                <>
                                    <Button
                                        onClick={handleUserLogout}
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#f44336',
                                            marginLeft: 1,
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </>
                            )}
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
                        {username ? (
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleUserLogout}>
                                    <ListItemText primary="Logout" />
                                </ListItemButton>
                            </ListItem>
                        ) : (
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate('/login')}>
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderPublic;