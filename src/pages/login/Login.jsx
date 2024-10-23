import React from 'react';
import { Box } from '@mui/material';
import LoginForm from './components/LoginForm';
import Header from './components/HeaderLogin'
import Footer from '../../components/Footer';
import useLoginLogic from './components/LoginLogic';

const Login = () => {
    const { handleLogin, error } = useLoginLogic();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // Asegura que ocupe toda la pantalla
            }}
        >
            {/* Header */}
            <Box sx={{ flexShrink: 0 }}>
                <Header />
            </Box>

            {/* Contenido principal centrado */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1, // Ocupar el espacio disponible entre el header y el footer
                    padding: 4,
                }}
            >
                <LoginForm handleLogin={handleLogin} error={error} />
            </Box>

            {/* Footer */}
            <Box sx={{ flexShrink: 0 }}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Login;
