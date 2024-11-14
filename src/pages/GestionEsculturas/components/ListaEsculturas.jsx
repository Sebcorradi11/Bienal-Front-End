import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { eliminarEscultura } from '../../../api/sculptures.routes';

const ListaEsculturas = ({ esculturas, terminoBusqueda = "", onEliminar }) => {
    const navigate = useNavigate();

    const modificarEscultura = (id) => {
        navigate(`/modificar-escultura/${id}`);
    };

    const verEscultura = (id) => {
        navigate(`/ver-escultura/${id}`);
    };

    const handleEliminar = async (id) => {
        const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar esta escultura?');
        if (confirmacion) {
            try {
                await eliminarEscultura(id);
                onEliminar(id); // Informar a GestionarEsculturas para actualizar la lista
                alert('Escultura eliminada exitosamente');
            } catch (error) {
                console.error('Error al eliminar la escultura:', error);
                alert('Error al eliminar la escultura');
            }
        }
    };

    const resaltarTexto = (texto) => {
        if (!terminoBusqueda) return texto;

        const partes = texto.split(new RegExp(`(${terminoBusqueda})`, 'gi'));
        return partes.map((parte, index) => (
            parte.toLowerCase() === terminoBusqueda.toLowerCase() ? (
                <span key={index} style={{ color: 'blue', fontWeight: 'bold' }}>{parte}</span>
            ) : (
                parte
            )
        ));
    };

    return (
        <Box sx={{ padding: { xs: 2, md: 3 }, marginTop: 3 }}>
            {esculturas.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
                    No hay esculturas disponibles
                </Typography>
            ) : (
                <Grid container spacing={2}>
                    {esculturas.map((escultura) => (
                        <Grid item xs={12} sm={6} md={4} key={escultura._id}>
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
                                    {resaltarTexto(escultura.name)}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Descripción: {escultura.description}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Fecha de Creación: {new Date(escultura.creation_date).toLocaleDateString('es-AR')}
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                                    <IconButton
                                        onClick={() => verEscultura(escultura._id)}
                                        aria-label="Ver escultura"
                                        color="primary"
                                    >
                                        <VisibilityIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => modificarEscultura(escultura._id)}
                                        aria-label="Modificar escultura"
                                        sx={{ color: '#ff4081' }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => handleEliminar(escultura._id)}
                                        aria-label="Eliminar escultura"
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

export default ListaEsculturas;
