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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/gestioneventos/Rectangle 32.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const AgregarEscultores = () => {
    const [escultores, setEscultores] = useState([]);
    const [nuevoEscultor, setNuevoEscultor] = useState('');
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleAgregarEscultor = () => {
        if (nuevoEscultor.trim()) {
            setEscultores([...escultores, nuevoEscultor.trim()]);
            setNuevoEscultor('');
        }
    };

    const handleAtras = () => {
        navigate(-1); // Navega a la página anterior
    };

    const handleEliminarEscultor = (index) => {
        setEscultores(escultores.filter((_, i) => i !== index));
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
                    Agregar Escultores
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <TextField
                        label="Nombre del Escultor"
                        value={nuevoEscultor}
                        onChange={(e) => setNuevoEscultor(e.target.value)}
                        sx={{ marginRight: 2 }}
                    />
                    <Button
                        onClick={handleAgregarEscultor}
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
                    >
                        Agregar Escultor
                    </Button>
                </Box>

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
                            <IconButton
                                onClick={() => handleEliminarEscultor(index)}
                                aria-label="Eliminar"
                                sx={{ color: 'gray' }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>

                {/* Botón de Atrás */}
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
        </Box>
    );
};

export default AgregarEscultores;
