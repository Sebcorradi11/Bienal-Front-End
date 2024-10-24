import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import LinkButtonList from './LinkButtonList';
import ErrorMessage from './ErrorMessage';

const LoginForm = ({ handleLogin, error }) => (
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
                    width:'800px', 
                    height:'200px',
                }}
            >
                <LinkButtonList handleLogin={handleLogin} />
            </Box>

            {error && <ErrorMessage error={error} />}
        </Paper>
    </Container>
);

export default LoginForm;

