import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { obtenerEventos, eliminarEvento } from '../../mockEventos';

const ListaEventos = () => {
    const [eventos, setEventos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarEventos = async () => {
            const data = await obtenerEventos();
            setEventos(data);
        };
        cargarEventos();
    }, []);

    const modificar = (id) => {
        navigate(`/modificar-evento/${id}`);
    };

    const verEvento = (id) => {
        navigate(`/ver-evento/${id}`);
    };

    const eliminar = async (id) => {
        try {
            const respuesta = await eliminarEvento(id);
            console.log(respuesta.mensaje);
            setEventos(eventos.filter((e) => e.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box sx={{ padding: { xs: 2, md: 3 }, marginTop: 3 }}>
            <Grid container spacing={2}>
                {eventos.map((evento) => (
                    <Grid item xs={12} sm={6} md={4} key={evento.id}>
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
                                {`${evento.nombre} - ${evento.fecha}`}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                                <IconButton
                                    onClick={() => verEvento(evento.id)}
                                    aria-label="Ver evento"
                                    color="primary"
                                >
                                    <VisibilityIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => modificar(evento.id)}
                                    aria-label="Modificar evento"
                                    sx={{ color: '#ff4081' }}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => eliminar(evento.id)}
                                    aria-label="Eliminar evento"
                                    color="error"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ListaEventos;
