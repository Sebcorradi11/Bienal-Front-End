import React, { useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import Buscador from './Buscador';

const App = () => {
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

    return (
        <div>
            <h1>Buscador de Esculturas y Escultores</h1>
            <Buscador onBuscar={handleBuscar} />

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

export default App;