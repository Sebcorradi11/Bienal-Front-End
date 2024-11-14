import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Buscador = ({ onBuscar }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        if (onBuscar) {
            onBuscar(e.target.value);
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: 1 }}>
            <SearchIcon />
            <TextField 
                placeholder="Buscar..." 
                variant="outlined" 
                fullWidth 
                value={busqueda} 
                onChange={handleChange} 
            />
        </Box>
    );
};

export default Buscador;
