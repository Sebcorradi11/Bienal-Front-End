import React, { useState } from 'react';
import {
    Box, Container, Paper, Tabs, Tab, Typography, TextField, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice'; // Importa la acción de login
import HeaderLogin from '../components/HeaderLogin';

const Login = () => {
    const [tabValue, setTabValue] = useState(0);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validUsername = tabValue === 0 ? 'Sebastiano' : 'user';
        const validPassword = '1234';

        if (username === validUsername && password === validPassword) {
            dispatch(login({ username, role: tabValue === 0 ? 'Sebastiano' : 'user' }));
            const route = tabValue === 0 ? '/HomeAdmin' : '/HomeUser';
            navigate(route);
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <>
            <HeaderLogin />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url("./assets/background.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Container maxWidth="sm">
                    <Paper elevation={3} sx={{ borderRadius: 5, padding: 4 }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            variant="fullWidth"
                            sx={{ marginBottom: 2 }}
                        >
                            <Tab label="Administrador" />
                            <Tab label="Usuario" />
                        </Tabs>

                        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                                {tabValue === 0 ? 'Login Administrador' : 'Login Usuario'}
                            </Typography>

                            <TextField
                                label="Usuario"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <TextField
                                label="Contraseña"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

                            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                                Entrar
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};

export default Login;