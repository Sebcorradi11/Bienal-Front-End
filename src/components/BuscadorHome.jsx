import React, { useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, CircularProgress, Box, TextField, Typography, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const BuscadorHome = () => {
    const [busqueda, setBusqueda] = useState('');
    const [results, setResults] = useState(null); // Null indica que aún no se ha buscado
    const [loading, setLoading] = useState(false);
    const baseUrl = import.meta.env.VITE_URL_BUSCADOR;
    const frontUrl = import.meta.env.VITE_FRONT_URL;
    const handleBuscar = async (term) => {
        if (!term) {
            setResults(null);
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/searchTerm`, { term });
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: 1, marginTop: '25px'}}>
                <SearchIcon />
                <TextField
                    placeholder="Buscar esculturas, escultores o eventos..."
                    variant="outlined"
                    fullWidth
                    value={busqueda}
                    onChange={handleChange}
                />
            </Box>

            {loading ? (
                <CircularProgress style={{ marginTop: '10px' }} />
            ) : results ? ( // Mostrar resultados solo si hay datos
                <div>
                    {results.sculptors.length > 0 && (
                        <>
                            <Typography variant="h6">Escultores</Typography>
                            <List>
                                {results.sculptors.map((sculptor) => (
                                    <ListItem key={sculptor._id}>
                                        <Link
                                            href={`${frontUrl}/ver-escultores-public/${sculptor._id}`}
                                            underline="hover"
                                        >
                                            <ListItemText
                                                primary={sculptor.name}
                                                secondary={`Obras: ${sculptor.works.join(', ') || 'Ninguna'}`}
                                            />
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    )}

                    {results.sculptures.length > 0 && (
                        <>
                            <Typography variant="h6">Esculturas</Typography>
                            <List>
                                {results.sculptures.map((sculpture) => (
                                    <ListItem key={sculpture._id}>
                                        <Link
                                            href={`${frontUrl}/ver-escultura-public/${sculpture._id}`}
                                            underline="hover"
                                        >
                                            <ListItemText
                                                primary={sculpture.name}
                                                secondary={`Escultor: ${sculpture.sculptorName || 'Desconocido'}`}
                                            />
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    )}

                    {results.events.length > 0 && (
                        <>
                            <Typography variant="h6">Eventos</Typography>
                            <List>
                                {results.events.map((event) => (
                                    <ListItem key={event._id}>
                                        <Link
                                            href={`${frontUrl}/ver-evento-public/${event._id}`}
                                            underline="hover"
                                        >
                                            <ListItemText
                                                primary={event.name}
                                                secondary={`Tema: ${event.theme}`}
                                            />
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default BuscadorHome;
