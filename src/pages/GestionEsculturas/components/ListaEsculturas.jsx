import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { eliminarEscultura, getEsculturas } from '../../../api/sculptures.routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderSpinner from '../../../components/LoaderSpinner';

const ListaEsculturas = ({ terminoBusqueda = "" }) => {
    const [esculturas, setEsculturas] = useState([]);
    const [filteredEsculturas, setFilteredEsculturas] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedEscultura, setSelectedEscultura] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        cargarEsculturas();
    }, []);

    useEffect(() => {
        // Actualiza las esculturas filtradas cada vez que cambia el término de búsqueda
        if (terminoBusqueda) {
            const filtradas = esculturas.filter((escultura) =>
                escultura.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
            );
            setFilteredEsculturas(filtradas);
        } else {
            setFilteredEsculturas(esculturas);
        }
    }, [terminoBusqueda, esculturas]);

    const cargarEsculturas = async () => {
        setLoading(true);
        try {
            const esculturasData = await getEsculturas();
            setEsculturas(esculturasData);
            setFilteredEsculturas(esculturasData); // Inicializa las filtradas con todas las esculturas
        } catch (error) {
            console.error('Error al cargar las esculturas:', error);
            toast.error('Error al cargar las esculturas');
        } finally {
            setLoading(false);
        }
    };

    const modificarEscultura = (id) => {
        navigate(`/modificar-escultura/${id}`);
    };

    const verEscultura = (id) => {
        navigate(`/ver-escultura/${id}`);
    };

    const confirmarEliminar = (id) => {
        setSelectedEscultura(id);
        setOpenDialog(true);
    };

    const handleEliminar = async () => {
        setOpenDialog(false);
        setLoading(true);
        try {
            await eliminarEscultura(selectedEscultura);
            const actualizadas = esculturas.filter((escultura) => escultura._id !== selectedEscultura);
            setEsculturas(actualizadas);
            setFilteredEsculturas(actualizadas); // Actualiza las filtradas también
            toast.success('Escultura eliminada exitosamente');
        } catch (error) {
            console.error('Error al eliminar la escultura:', error);
            toast.error('Error al eliminar la escultura');
        } finally {
            setLoading(false);
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
            <ToastContainer />
            {loading && <LoaderSpinner loading={loading} />}

            {!loading && filteredEsculturas.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
                    No hay esculturas disponibles
                </Typography>
            ) : (
                <Grid container spacing={2}>
                    {filteredEsculturas.map((escultura) => (
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
                                    minHeight: '150px',
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
                                        onClick={() => confirmarEliminar(escultura._id)}
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

            {/* Popup de confirmación */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirmar Eliminación de Escultura</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro de que deseas eliminar esta escultura? Esta acción no se puede deshacer.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleEliminar} color="error" autoFocus>
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ListaEsculturas;
