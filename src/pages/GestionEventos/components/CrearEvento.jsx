import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Icon } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import fondoBoton from '../assets/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom'; // Para navegar entre páginas
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CrearEvento = () => {
    const [imagen, setImagen] = useState(null);
    const navigate = useNavigate(); // Hook para navegar

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagen(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagen(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleCrearEvento = () => {
        // Aquí va la lógica para crear el evento
        console.log('Evento creado');
    };

    const handleAtras = () => {
        navigate(-1); // Navega hacia atrás
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderPublic />

            <Box
                sx={{
                    flexGrow: 1,
                    padding: { xs: 2, md: 4 },
                    gap: 3,
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Crear Evento
                </Typography>

                <Box
                    component="form"
                    sx={{
                        maxWidth: 600,
                        margin: '0 auto',
                        display: 'grid',
                        gap: 2,
                    }}
                >
                    <TextField label="Nombre del Evento" fullWidth />
                    <TextField
                        label="Fecha del Evento"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField label="Lugar del Evento" fullWidth />
                    <TextField label="Descripción del Evento" multiline rows={4} fullWidth />

                    <Box
                        sx={{
                            border: '2px dashed #aaa',
                            borderRadius: '8px',
                            textAlign: 'center',
                            padding: 3,
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease-in-out',
                            '&:hover': { backgroundColor: '#ddd' },
                        }}
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        component="label"
                    >
                        <input type="file" hidden onChange={handleImageUpload} />
                        <Icon sx={{ fontSize: 40, color: '#777' }}>
                            <ImageIcon />
                        </Icon>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Arrastra y suelta la imagen aquí o{' '}
                            <strong>selecciona el archivo</strong> que desea subir
                        </Typography>
                    </Box>

                    {imagen && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 2,
                            }}
                        >
                            <img
                                src={imagen}
                                alt="Imagen del evento"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '300px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </Box>
                    )}

                    <Button
                        fullWidth
                        sx={{
                            height: '60px',
                            borderRadius: '30px',
                            backgroundImage: `url(${fondoBoton})`,
                            backgroundSize: 'cover',
                            color: 'white',
                            textTransform: 'none',
                            '&:hover': { opacity: 0.9 },
                        }}
                    >
                        <Typography variant="h6">Escultores</Typography>
                    </Button>

                    {/* Botones Crear Evento y Atrás */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: 2,
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleCrearEvento}
                            sx={{ width: '48%' }}
                        >
                            Crear Evento
                        </Button>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            variant="outlined"
                            color="secondary"
                            onClick={handleAtras}
                            sx={{ width: '48%' }}
                        >
                            Atrás
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default CrearEvento;
