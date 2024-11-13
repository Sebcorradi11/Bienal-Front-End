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
import BackButton from '../../../../components/BackButton';
import AddIcon from '@mui/icons-material/Add';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom';

const ModificarEsculturas = () => {
    const [esculturas, setEsculturas] = useState(['Simpleza', 'Amor', 'Peligro']);
    const [nuevaEscultura, setNuevaEscultura] = useState('');
    const [esculturaEditable, setEsculturaEditable] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();

    const handleAgregarEscultura = () => {
        if (nuevaEscultura.trim()) {
            setEsculturas([...esculturas, nuevaEscultura.trim()]);
            setNuevaEscultura('');
        }
    };

    const handleEliminarEscultura = (index) => {
        setEsculturas(esculturas.filter((_, i) => i !== index));
    };

    const handleOpenDialog = (index) => {
        setSelectedIndex(index);
        setEsculturaEditable(esculturas[index]);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEsculturaEditable('');
        setSelectedIndex(null);
    };

    const handleModificarEscultura = () => {
        const updatedEsculturas = [...esculturas];
        updatedEsculturas[selectedIndex] = esculturaEditable;
        setEsculturas(updatedEsculturas);
        handleCloseDialog();
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
                    Modificar Esculturas - Luis Bernardi
                </Typography>

                {/* Botón de agregar escultura */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <Button
                        onClick={handleAgregarEscultura}
                        sx={{
                            height: '56px',
                            paddingX: 4,
                            backgroundImage: `url(${fondoBoton})`,
                            backgroundSize: 'cover',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            '&:hover': { opacity: 0.9 },
                        }}
                        startIcon={<AddIcon />}
                    >
                        Agregar Escultura
                    </Button>
                </Box>

                {/* Lista de esculturas */}
                <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    {esculturas.map((escultura, index) => (
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
                            <ListItemText primary={escultura} />
                            <Box>
                                <IconButton
                                    onClick={() => handleOpenDialog(index)}
                                    aria-label="Modificar"
                                    sx={{ color: 'blue', marginRight: 1 }}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleEliminarEscultura(index)}
                                    aria-label="Eliminar"
                                    sx={{ color: 'gray' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                    ))}
                </List>

                {/* Botón de Atrás */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                    <BackButton sx={{ width: '48%' }} />
                </Box>
            </Box>

            <Footer />

            {/* Diálogo para modificar escultura */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle sx={{ fontWeight: 'bold' }}>Modificar Escultura</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Nombre de la Escultura"
                        value={esculturaEditable}
                        onChange={(e) => setEsculturaEditable(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ marginTop: 2 }}
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
                        onClick={handleModificarEscultura}
                        sx={{ color: '#1976d2', fontWeight: 'bold' }}
                    >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ModificarEsculturas;
