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
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import BackButton from '../../../../components/BackButton';
import { useNavigate } from 'react-router-dom';

const AgregarEsculturas = () => {
    const [esculturas, setEsculturas] = useState([]);
    const [nuevaEscultura, setNuevaEscultura] = useState('');
    const navigate = useNavigate();

    const handleAgregarEscultura = () => {
        if (nuevaEscultura.trim()) {
            setEsculturas([...esculturas, nuevaEscultura.trim()]);
            setNuevaEscultura('');
        }
    };

    const handleAtras = () => {
        navigate(-1); // Navega a la página anterior
    };

    const handleEliminarEscultura = (index) => {
        setEsculturas(esculturas.filter((_, i) => i !== index));
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
                    Agregar Esculturas
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <TextField
                        label="Nombre de la Escultura"
                        value={nuevaEscultura}
                        onChange={(e) => setNuevaEscultura(e.target.value)}
                        sx={{ marginRight: 2 }}
                    />
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
                    >
                        Agregar Escultura
                    </Button>
                </Box>

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
                            <IconButton
                                onClick={() => handleEliminarEscultura(index)}
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
                    <BackButton sx={{ width: '48%' }} />
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default AgregarEsculturas;
