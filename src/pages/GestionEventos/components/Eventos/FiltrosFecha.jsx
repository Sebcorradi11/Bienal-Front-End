import React from 'react';
import { TextField, Box, Grid } from '@mui/material';

const FiltrosFecha = () => {
    return (
        <Box
            sx={{
                padding: { xs: 2, md: 3 },
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Desde"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Hasta"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default FiltrosFecha;
