import React from 'react';
import { Typography } from '@mui/material';

const ErrorMessage = ({ error }) => (
    <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
        {error}
    </Typography>
);

export default ErrorMessage;
