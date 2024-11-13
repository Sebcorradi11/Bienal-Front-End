import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ sx = {}, color = 'secondary', ...props }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navega a la página anterior
    };

    return (
        <Button
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            color={color}
            onClick={handleBack}
            sx={{
                width: { xs: '100%', sm: '48%' },
                ...sx,
            }}
            {...props}
        >
            Atrás
        </Button>
    );
};

export default BackButton;
