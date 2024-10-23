// SculptorList.jsx
// src/pages/Sculptor/components/SculptorList.jsx
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SculptorCard from './SculptorCard';
import { sculptors } from '../mockSculptor';

const SculptorList = () => {
    return (
        <Box sx={{ paddingY: 4, backgroundColor: '#fff' }}>
            <Grid container spacing={3} justifyContent="center">
                {sculptors.map((sculptor) => (
                    <Grid item key={sculptor.id} xs={12} sm={6} md={4} lg={3}>
                        <SculptorCard {...sculptor} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SculptorList;

