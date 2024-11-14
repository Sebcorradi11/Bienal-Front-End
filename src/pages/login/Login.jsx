import React from 'react';
import { Box } from '@mui/material';
import LoginForm from './components/LoginForm';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import useLoginLogic from './components/LoginLogic';
import { useState } from 'react';
import ErrorMessage from './components/ErrorMessage';
import LoaderSpinner from '../../components/LoaderSpinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { handleLogin } = useLoginLogic();
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            {/* Contenedor de Toast para mostrar mensajes */}
            <ToastContainer position="top-right" autoClose={3000} />

            {isLoading && <LoaderSpinner />}
            
            {/* Header */}
            <Box sx={{ flexShrink: 0 }}>
                <HeaderPublic />
            </Box>

            {/* Contenido principal centrado */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    padding: 4,
                }}
            >
                {error && <ErrorMessage error={error} />}
                <LoginForm handleLogin={handleLogin} setError={setError} setLoading={setLoading}/>
            </Box>

            {/* Footer */}
            <Box sx={{ flexShrink: 0 }}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Login;
