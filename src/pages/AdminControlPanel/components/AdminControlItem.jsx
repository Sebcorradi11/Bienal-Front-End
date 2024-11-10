import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const AdminControlItem = ({ title, path, onNavigate, backgroundImage }) => (
    <Grid item xs={12} sm={6} md={3}>
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
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&:hover': { transform: 'scale(1.05)' },
            }}
            onClick={() => onNavigate(path)}
        >
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                {title}
            </Typography>
        </Paper>
    </Grid>
);

export default AdminControlItem;
