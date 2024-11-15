import React, { useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, CircularProgress, Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Buscador= () => {
    const [busqueda, setBusqueda] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleBuscar = async (term) => {
        if (!term) {
            setResults([]);
            return;
        }
        
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5009/api/search/searchTerm', { term });
            setResults(response.data);
        } catch (error) {
            console.error("Error al buscar esculturas o escultores:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const term = e.target.value;
        setBusqueda(term);
        handleBuscar(term);
    };

    return (
        <div>
            <h1>Buscador de Esculturas y Escultores</h1>
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

            {loading ? (
                <CircularProgress style={{ marginTop: '10px' }} />
            ) : (
                <List>
                    {results.map((result, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={result.name} secondary={result.description} />
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default Buscador;