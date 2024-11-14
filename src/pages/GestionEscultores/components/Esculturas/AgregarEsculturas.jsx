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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import BackButton from '../../../../components/BackButton';
import { getEsculturas } from '../../../../api/sculptures.routes';

const AgregarEsculturas = () => {
    const [esculturas, setEsculturas] = useState([]); // Lista de esculturas disponibles desde el backend
    const [esculturasSeleccionadas, setEsculturasSeleccionadas] = useState([]); // Esculturas seleccionadas
    const [searchQuery, setSearchQuery] = useState('');
    const [isFirstSelection, setIsFirstSelection] = useState(true);

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
            }
        };
        fetchSculptures();
    }, []);

    // Agregar una escultura a la lista de seleccionadas, verificando si tiene un autor
    const handleAgregarEscultura = (escultura) => {
        if (escultura.sculptor) {
            // Si la escultura ya tiene un autor, mostramos un mensaje de confirmación
            const replace = window.confirm('Esta escultura ya tiene un autor, ¿deseas reemplazarlo?');
            if (!replace) return;
        }

        let updatedSeleccionadas = [...esculturasSeleccionadas];
        if (isFirstSelection) {
            // Duplica la primera escultura seleccionada
            updatedSeleccionadas = [...updatedSeleccionadas, escultura._id, escultura._id];
            setIsFirstSelection(false); // Desactiva la duplicación en futuras selecciones
        } else {
            if (!updatedSeleccionadas.includes(escultura._id)) {
                updatedSeleccionadas = [...updatedSeleccionadas, escultura._id];
            }
        }

        setEsculturasSeleccionadas(updatedSeleccionadas);
        localStorage.setItem('selectedSculptures', JSON.stringify(updatedSeleccionadas));
    };

    // Eliminar una escultura de la lista de seleccionadas
    const handleEliminarEscultura = (index) => {
        const updatedSeleccionadas = esculturasSeleccionadas.filter((_, i) => i !== index);
        setEsculturasSeleccionadas(updatedSeleccionadas);
        localStorage.setItem('selectedSculptures', JSON.stringify(updatedSeleccionadas));
    };

    // Filtrar esculturas según el nombre de búsqueda
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

                {/* Botón de Atrás */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                    <BackButton sx={{ width: '48%' }} />
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default AgregarEsculturas;
