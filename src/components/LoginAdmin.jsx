import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Descomentar cuando la API esté disponible

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // API de inicio de sesion 
        /*
        try {
            const response = await axios.post('http://localhost:3000/api/gestion/login', {
                username,
                password,
            });

            if (response.status === 200) {
                navigate('/homeAdmin');
            } else {
                setError('Credenciales incorrectas');
            }
        } catch (error) {
            setError('Error al iniciar sesión');
        }
        */

        // SIMULACIÓN: Credenciales de prueba
        const validUsername = 'admin';
        const validPassword = '1234';

        if (username === validUsername && password === validPassword) {
            navigate('/HomeAdmin');
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ padding: 4, borderRadius: 5 }}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <Typography variant="h5" gutterBottom>
                            INICIO SESIÓN ADMINISTRADOR
                        </Typography>

                        <TextField
                            label="usuario"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <TextField
                            label="contraseña"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                            ENTRAR
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
