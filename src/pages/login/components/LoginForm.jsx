import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import LinkButtonList from './LinkButtonList';
import PropTypes from 'prop-types';


const LoginForm = ({ handleLogin, setError }) => {

    return(
    <Container maxWidth="md">
        <Paper elevation={3} sx={{ borderRadius: 5, padding: 5, width: '100%' }}>
            <Typography variant="h2" align="center" gutterBottom  sx={{ fontWeight: 'bold' }}>
                Inicio de Sesión
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    mt: 2,
                    width: '100%', // Cambiado a 100% para que se ajuste al contenedor
                    maxWidth: '800px', // Limitar el ancho máximo
                    padding: '0 20px', // Añadir padding para mejor ajuste
                }}
            >
                <LinkButtonList handleLogin={handleLogin} setError={setError} />
            </Box>

        </Paper>
    </Container>
);}

LoginForm.propTypes = {
    handleLogin: PropTypes.func,
    setError: PropTypes.func.isRequired,
};


export default LoginForm;

