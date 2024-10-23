// BackButton.jsx
import React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import PropTypes from 'prop-types';

const BackButton = ({ onClick }) => (
    <Box
        sx={{
            position: 'fixed',
            bottom: 220,
            right: 16,
            zIndex: 1000,
        }}
    >
        <Button variant="contained" color="primary" startIcon={<ArrowBack />} onClick={onClick}>
            Atrás
        </Button>
    </Box>
);

BackButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default BackButton;
