import React from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const BuscadorEvento = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: 1 }}>
            <SearchIcon />
            <TextField placeholder="Buscar..." variant="outlined" fullWidth />
        </Box>
    );
};

export default BuscadorEvento;
