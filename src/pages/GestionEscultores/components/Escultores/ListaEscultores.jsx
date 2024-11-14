import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
<<<<<<< HEAD
=======
import { obtenerTodosSculptores, eliminarSculptor } from '../../../../api/Sculptores/sculptoresApi';
>>>>>>> 6c7da2c2368fdf5471b6170449db0ebfa42d320c
import DeleteIcon from '@mui/icons-material/Delete';
import { obtenerTodosSculptores, eliminarSculptor } from '../../../../api/Sculptores/sculptoresApi';
import { useNavigate } from 'react-router-dom';

const ListaEscultores = ({ searchQuery }) => {
    const [escultores, setEscultores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarEscultores();
    }, []);

    const cargarEscultores = async () => {
        try {
            const data = await obtenerTodosSculptores();
            setEscultores(data);
        } catch (error) {
            console.error('Error al cargar los escultores:', error);
        }
    };

    const modificar = (id) => {
        navigate(`/modificar-escultor/${id}`);
    };

    const verEscultor = (id) => {
        navigate(`/ver-escultor/${id}`);
    };

    const eliminar = async (id) => {
        const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este escultor?');
        if (confirmacion) {
            try {
                await eliminarSculptor(id);
<<<<<<< HEAD
                setEscultores((prevEscultores) => prevEscultores.filter((e) => e._id !== id));
=======
                await eliminarSculptor(id);
                setEscultores(escultores.filter((e) => e._id !== id));
>>>>>>> 6c7da2c2368fdf5471b6170449db0ebfa42d320c
                alert('Escultor eliminado exitosamente');
            } catch (error) {
                console.error('Error al eliminar el escultor:', error);
                alert('Error al eliminar el escultor');
            }
        }
    };

    const highlightText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <span key={index} style={{ color: 'blue', fontWeight: 'bold' }}>{part}</span>
            ) : (
                part
            )
        );
    };

    const filteredEscultores = escultores.filter((escultor) =>
        escultor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box sx={{ padding: { xs: 2, md: 3 }, marginTop: 3 }}>
            {filteredEscultores.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
                    No hay escultores registrados
                </Typography>
            ) : (
                <Grid container spacing={2}>
                    {filteredEscultores.map((escultor) => (
                        <Grid item xs={12} sm={6} md={4} key={escultor._id}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#f9f9f9',
                                    padding: 2,
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    minHeight: '120px',
                                }}
                            >
                                <Typography variant="body1" fontWeight="bold" gutterBottom>
<<<<<<< HEAD
                                    {highlightText(escultor.name, searchQuery)}
=======
                                    {escultor.name} {/* Asegúrate de que el campo coincide con el esquema del backend */}
                                    {escultor.name} {/* Asegúrate de que el campo coincide con el esquema del backend */}
>>>>>>> 6c7da2c2368fdf5471b6170449db0ebfa42d320c
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                                    <IconButton
                                        onClick={() => verEscultor(escultor._id)}
                                        aria-label="Ver escultor"
                                        color="primary"
                                    >
                                        <VisibilityIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => modificar(escultor._id)}
                                        aria-label="Modificar escultor"
                                        sx={{ color: '#ff4081' }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => eliminar(escultor._id)}
                                        aria-label="Eliminar escultor"
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default ListaEscultores;
