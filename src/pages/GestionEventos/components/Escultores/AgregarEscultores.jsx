import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';
import { obtenerTodosSculptores } from '../../../../api/sculptores/sculptoresApi'; // Asegúrate de importar correctamente esta función

const AgregarEscultores = () => {
    const [escultores, setEscultores] = useState([]); // Lista de escultores disponibles desde el backend
    const [escultoresSeleccionados, setEscultoresSeleccionados] = useState([]); // Escultores seleccionados
    const [searchQuery, setSearchQuery] = useState('');
    const [isFirstSelection, setIsFirstSelection] = useState(true);

    // Cargar escultores guardados en localStorage al cargar el componente
    useEffect(() => {
        const savedSculptors = JSON.parse(localStorage.getItem('selectedSculptors') || '[]');
        setEscultoresSeleccionados(savedSculptors);
    }, []);

    // Obtener todos los escultores desde el backend
    useEffect(() => {
        const fetchSculptors = async () => {
            try {
                const response = await obtenerTodosSculptores();
                setEscultores(response);
            } catch (error) {
                console.error('Error al obtener escultores:', error);
            }
        };
        fetchSculptors();
    }, []);

    // Agregar un escultor a la lista de seleccionados
    const handleAgregarEscultor = (escultor) => {
        let updatedSeleccionados = [...escultoresSeleccionados];
        
        // Duplicar la primera selección solo si es la primera vez
        if (isFirstSelection) {
            updatedSeleccionados = [...updatedSeleccionados, escultor._id, escultor._id];
            setIsFirstSelection(false); // Desactiva la duplicación en futuras selecciones
        } else {
            // Agregar solo si el escultor aún no está en la lista
            if (!updatedSeleccionados.includes(escultor._id)) {
                updatedSeleccionados = [...updatedSeleccionados, escultor._id];
            }
        }

        // Actualizar el estado y almacenar en localStorage
        setEscultoresSeleccionados(updatedSeleccionados);
        localStorage.setItem('selectedSculptors', JSON.stringify(updatedSeleccionados));
    };

    // Eliminar un escultor de la lista de seleccionados
    const handleEliminarEscultor = (index) => {
        const updatedSeleccionados = escultoresSeleccionados.filter((_, i) => i !== index);
        setEscultoresSeleccionados(updatedSeleccionados);
        localStorage.setItem('selectedSculptors', JSON.stringify(updatedSeleccionados));
    };

    // Filtrar escultores según el nombre de búsqueda
    const filteredEscultores = escultores.filter((escultor) =>
        escultor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const uniqueEscultoresSeleccionados = [...new Set(escultoresSeleccionados)];

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
                <Typography variant="h4" textAlign="center" gutterBottom sx={{ marginBottom: 3 }}>
                    Agregar Escultores
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <TextField
                        label="Buscar escultor"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        fullWidth
                    />
                </Box>

                <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    {filteredEscultores.map((escultor) => (
                        <ListItem
                            key={escultor._id}
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
                            <ListItemText primary={escultor.name} />
                            <ListItemSecondaryAction>
                                <IconButton
                                    onClick={() => handleAgregarEscultor(escultor)}
                                    aria-label="Agregar"
                                    sx={{ color: 'green' }}
                                >
                                    <AddIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>

                <Typography variant="h6" textAlign="center" sx={{ marginTop: 4 }}>
                    Escultores Seleccionados
                </Typography>
                <List sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    {uniqueEscultoresSeleccionados.map((escultorId, index) => {
                        const escultor = escultores.find((e) => e._id === escultorId);
                        return escultor ? (
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
                                <ListItemText primary={escultor.name} />
                                <IconButton
                                    onClick={() => handleEliminarEscultor(index)}
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
        </Box>
    );
};

export default AgregarEscultores;
