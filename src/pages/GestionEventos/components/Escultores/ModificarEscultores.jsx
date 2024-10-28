import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/gestioneventos/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom';

const ModificarEscultores = () => {
    const [escultores, setEscultores] = useState([
        'Juan Pérez',
        'Luis Bernardi',
        'Lucas Giménez',
    ]);
    const [nuevoEscultor, setNuevoEscultor] = useState('');
    const [escultorEditable, setEscultorEditable] = useState('');
    const [openDialog, setOpenDialog] = useState(false); // Estado para controlar el diálogo
    const [selectedIndex, setSelectedIndex] = useState(null); // Índice del escultor seleccionado
    const navigate = useNavigate();

    const handleAgregarEscultor = () => {
        if (nuevoEscultor.trim()) {
            setEscultores([...escultores, nuevoEscultor.trim()]);
            setNuevoEscultor('');
        }
    };

    const handleEliminarEscultor = (index) => {
        setEscultores(escultores.filter((_, i) => i !== index));
    };

    const handleOpenDialog = (index) => {
        setSelectedIndex(index);
        setEscultorEditable(escultores[index]);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEscultorEditable('');
        setSelectedIndex(null);
    };

    const handleModificarEscultor = () => {
        const updatedEscultores = [...escultores];
        updatedEscultores[selectedIndex] = escultorEditable;
        setEscultores(updatedEscultores);
        handleCloseDialog();
    };

    const handleAtras = () => {
        navigate(-1);
    };

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
                <Typography
                    variant="h4"
                    textAlign="center"
                    gutterBottom
                    sx={{ marginBottom: 3 }}
                >
                    Modificar Escultores - Bienal 2014
                </Typography>
                <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    {escultores.map((escultor, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                backgroundColor: '#e0e0e0',
                                marginBottom: 1,
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px 16px',
                            }}
                        >
                            <ListItemText primary={escultor} />
                            <Box>
                                <IconButton
                                    onClick={() => handleOpenDialog(index)}
                                    aria-label="Modificar"
                                    sx={{ color: 'blue', marginRight: 1 }}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleEliminarEscultor(index)}
                                    aria-label="Eliminar"
                                    sx={{ color: 'gray' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleAtras}
                        sx={{
                            height: '50px',
                            width: '200px',
                            borderRadius: '25px',
                            backgroundColor: '#1976d2',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            '&:hover': { backgroundColor: '#1565c0' },
                        }}
                    >
                        Atrás
                    </Button>
                </Box>
            </Box>

            <Footer />

            {/* Diálogo para modificar escultor */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle sx={{ fontWeight: 'bold' }}>Modificar Escultor</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Nombre del Escultor"
                        value={escultorEditable}
                        onChange={(e) => setEscultorEditable(e.target.value)}
                        InputLabelProps={{
                            shrink: true, // Mantiene el label encima incluso cuando hay texto
                        }}
                        sx={{
                            marginTop: 2, // Agrega espacio superior para separar del título
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
                    <Button
                        onClick={handleCloseDialog}
                        sx={{ color: '#ff4081', fontWeight: 'bold' }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleModificarEscultor}
                        sx={{ color: '#1976d2', fontWeight: 'bold' }}
                    >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>

        </Box >
    );
};

export default ModificarEscultores;
