import React from 'react';
import { Grid, Box } from '@mui/material';
import SculptureCard from './SculptureCard';
import { sculptures } from '../mockSculpture';

const SculptureList = () => {
    return (
        <Box sx={{ paddingY: 4, backgroundColor: '#f5f5f5' }}>
            <Grid container spacing={3} justifyContent="center">
                {sculptures.map((sculpture) => (
                    <Grid item key={sculpture.id} xs={12} sm={6} md={4} lg={3}>
                        <SculptureCard {...sculpture} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SculptureList;