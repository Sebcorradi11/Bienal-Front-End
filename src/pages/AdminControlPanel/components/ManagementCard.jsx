// ManagementCard.jsx
import React from 'react';
import { Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ManagementCard = ({ title, onClick }) => (
    <Paper
        elevation={6}
        sx={{
            height: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: 5,
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.05)' },
        }}
        onClick={onClick}
    >
        <Typography variant="h6">{title}</Typography>
    </Paper>
);

ManagementCard.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ManagementCard;
