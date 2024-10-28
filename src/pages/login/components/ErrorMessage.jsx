import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => (
    <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
        {error.includes('account-exists-with-different-credential') ? 'Su cuenta ya fue registrada, chequear por otro medio.' : error}
    </Typography>
);

ErrorMessage.propTypes = {
    error: PropTypes.string,
};

export default ErrorMessage;
