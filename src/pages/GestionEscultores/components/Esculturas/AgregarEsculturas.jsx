import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';
import { getEsculturas } from '../../../../api/sculptures.routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AgregarEsculturas = () => {
    const [esculturas, setEsculturas] = useState([]); // Lista de esculturas disponibles desde el backend
    const [esculturasSeleccionadas, setEsculturasSeleccionadas] = useState([]); // Esculturas seleccionadas
    const [searchQuery, setSearchQuery] = useState('');
    const [isFirstSelection, setIsFirstSelection] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogEscultura, setDialogEscultura] = useState(null);

    // Cargar esculturas guardadas en localStorage al cargar el componente
    useEffect(() => {
        const savedSculptures = JSON.parse(localStorage.getItem('selectedSculptures') || '[]');
        setEsculturasSeleccionadas(savedSculptures);
    }, []);

    // Obtener todas las esculturas desde el backend
    useEffect(() => {
        const fetchSculptures = async () => {
            try {
                const response = await getEsculturas();
                setEsculturas(response);
            } catch (error) {
                console.error('Error al obtener esculturas:', error);
                toast.error('Error al cargar esculturas.');
            }
        };
        fetchSculptures();
    }, []);

    // Agregar una escultura a la lista de seleccionadas, verificando si tiene un autor
    const handleAgregarEscultura = (escultura) => {
        if (escultura.sculptor) {
            setDialogEscultura(escultura);
            setDialogOpen(true);
            return;
        }

        let updatedSeleccionadas = [...esculturasSeleccionadas];
        if (isFirstSelection) {
            updatedSeleccionadas = [...updatedSeleccionadas, escultura._id, escultura._id];
            setIsFirstSelection(false);
        } else {
            if (!updatedSeleccionadas.includes(escultura._id)) {
                updatedSeleccionadas = [...updatedSeleccionadas, escultura._id];
            }
        }

        setEsculturasSeleccionadas(updatedSeleccionadas);
        localStorage.setItem('selectedSculptures', JSON.stringify(updatedSeleccionadas));
        toast.success(`${escultura.name} agregada correctamente.`);
    };

    const handleConfirmAgregar = () => {
        if (dialogEscultura) {
            let updatedSeleccionadas = [...esculturasSeleccionadas];
            if (!updatedSeleccionadas.includes(dialogEscultura._id)) {
                updatedSeleccionadas = [...updatedSeleccionadas, dialogEscultura._id];
            }

            setEsculturasSeleccionadas(updatedSeleccionadas);
            localStorage.setItem('selectedSculptures', JSON.stringify(updatedSeleccionadas));
            toast.success(`Escultura ${dialogEscultura.name} reemplazada correctamente.`);
        }
        setDialogOpen(false);
    };

    const handleEliminarEscultura = (index) => {
        const updatedSeleccionadas = esculturasSeleccionadas.filter((_, i) => i !== index);
        setEsculturasSeleccionadas(updatedSeleccionadas);
        localStorage.setItem('selectedSculptures', JSON.stringify(updatedSeleccionadas));
        toast.info('Escultura eliminada.');
    };

    const filteredEsculturas = esculturas.filter((escultura) =>
        escultura.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const uniqueEsculturasSeleccionadas = [...new Set(esculturasSeleccionadas)];

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
                    Agregar Esculturas
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <TextField
                        label="Buscar escultura"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        fullWidth
                    />
                </Box>

                <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    {filteredEsculturas.map((escultura) => (
                        <ListItem
                            key={escultura._id}
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
                            <ListItemText primary={escultura.name} />
                            <ListItemSecondaryAction>
                                <IconButton
                                    onClick={() => handleAgregarEscultura(escultura)}
                                    aria-label="Agregar"
                                    sx={{ color: escultura.sculptor ? 'red' : 'green' }}
                                >
                                    <AddIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>

                <Typography variant="h6" textAlign="center" sx={{ marginTop: 4 }}>
                    Esculturas Seleccionadas
                </Typography>
                <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    {uniqueEsculturasSeleccionadas.map((esculturaId, index) => {
                        const escultura = esculturas.find((e) => e._id === esculturaId);
                        return escultura ? (
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
                                <ListItemText primary={escultura.name} />
                                <IconButton
                                    onClick={() => handleEliminarEscultura(index)}
                                    aria-label="Eliminar"
                                    sx={{ color: 'red' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ) : null;
                    })}
                </List>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                    <BackButton sx={{ width: '48%' }} />
                </Box>
            </Box>

            <Footer />

            {/* Dialogo para confirmar reemplazo */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Reemplazar Escultura</DialogTitle>
                <DialogContent>
                    <Typography>
                        La escultura {dialogEscultura?.name} ya tiene un autor. ¿Deseas reemplazarla?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmAgregar} color="primary">
                        Reemplazar
                    </Button>
                </DialogActions>
            </Dialog>

            <ToastContainer position="top-right" />
        </Box>
    );
};

export default AgregarEsculturas;
