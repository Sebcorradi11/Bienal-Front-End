import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';

const VerResultados = () => {
    const { id } = useParams(); // Captura el id del evento desde la URL
    const navigate = useNavigate();
    const [escultores, setEscultores] = useState([]); // Estado para almacenar los resultados de los escultores

    useEffect(() => {
        // Hacer fetch a la API para obtener los resultados del evento
        const fetchResults = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_URL_VOTACION}/resultados/${id}`);
                const data = await response.json();
                
                // Ordenar los escultores de mayor a menor puntaje promedio
                const escultoresOrdenados = data.sort((a, b) => b.promedioPuntaje - a.promedioPuntaje);
                
                setEscultores(escultoresOrdenados); // Guardar en el estado
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        };

        fetchResults();
    }, [id]);


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderPublic />

            <Box
                sx={{
                    flexGrow: 1,
                    padding: { xs: 2, md: 4 },
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Resultados de Escultores - Bienal {id}
                </Typography>

                <List>
                    {escultores.map((escultor) => (
                        <ListItem
                            key={escultor.escultorId}
                            sx={{
                                backgroundColor: '#e0e0e0',
                                marginBottom: 1,
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ListItemText
                                primary={escultor.escultorNombre}
                                secondary={`Puntaje promedio: ${escultor.promedioPuntaje.toFixed(2)}`}
                            />
                        </ListItem>
                    ))}
                </List>
                <BackButton sx={{ width: '48%' }} />
            </Box>

            <Footer />
        </Box>
    );
};

export default VerResultados;
