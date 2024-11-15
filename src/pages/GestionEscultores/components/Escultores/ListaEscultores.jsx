import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { obtenerTodosSculptores, eliminarSculptor } from '../../../../api/Sculptores/sculptoresApi';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderSpinner from '../../../../components/LoaderSpinner';

const ListaEscultores = ({ searchQuery }) => {
    const [escultores, setEscultores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedEscultor, setSelectedEscultor] = useState(null); // Escultor seleccionado para eliminar
    const [dialogOpen, setDialogOpen] = useState(false); // Estado del popup
    const navigate = useNavigate();

    useEffect(() => {
        cargarEscultores();
    }, []);

    const cargarEscultores = async () => {
        setLoading(true);
        try {
            const data = await obtenerTodosSculptores();
            setEscultores(data);
        } catch (error) {
            console.error('Error al cargar los escultores:', error);
            toast.error('Error al cargar los escultores');
        } finally {
            setLoading(false);
        }
    };

    const modificar = (id) => {
        navigate(`/modificar-escultor/${id}`);
    };

    const verEscultor = (id) => {
        navigate(`/ver-escultor/${id}`);
    };

    const confirmarEliminar = (id) => {
        setSelectedEscultor(id);
        setDialogOpen(true);
    };

    const eliminar = async () => {
        setDialogOpen(false);
        try {
            await eliminarSculptor(selectedEscultor);
            setEscultores(escultores.filter((e) => e._id !== selectedEscultor));
            toast.success('Escultor eliminado exitosamente');
        } catch (error) {
            console.error('Error al eliminar el escultor:', error);
            toast.error('Error al eliminar el escultor');
        } finally {
            setSelectedEscultor(null);
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
            <ToastContainer />
            {loading && <LoaderSpinner loading={loading} />}

            {!loading && filteredEscultores.length === 0 ? (
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
                                    {highlightText(escultor.name, searchQuery)}
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
                                        onClick={() => confirmarEliminar(escultor._id)}
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

            {/* Popup de confirmación */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Confirmar Eliminación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro de que deseas eliminar este escultor? Esta acción no se puede deshacer.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={eliminar} color="error">
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ListaEscultores;
