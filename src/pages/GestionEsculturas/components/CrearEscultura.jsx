import React, { useState } from 'react';
import {
    Box, TextField, Typography, Button, Icon
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import fondoBoton from '../../../assets/gestionesculturas/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CrearEscultura = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        tematica: '',
        fechaCreacion: '',
        imagenPre: null,
        imagenDurante: null,
        imagenPost: null,
    });
    const [imagenVistaPrevia, setImagenVistaPrevia] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (event, field) => {
        const file = event.target.files[0];
        setFormData({ ...formData, [field]: file });

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagenVistaPrevia((prev) => ({ ...prev, [field]: reader.result }));
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event, field) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFormData({ ...formData, [field]: file });

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagenVistaPrevia((prev) => ({ ...prev, [field]: reader.result }));
            reader.readAsDataURL(file);
        }
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
                    gap: 3,
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Crear Escultura
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
                    <TextField
                        label="Nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Temática"
                        name="tematica"
                        value={formData.tematica}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Fecha de Creación"
                        name="fechaCreacion"
                        type="date"
                        value={formData.fechaCreacion}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                    />

                    {['imagenPre', 'imagenDurante', 'imagenPost'].map((field, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: '2px dashed #aaa',
                                borderRadius: '8px',
                                textAlign: 'center',
                                padding: 3,
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease-in-out',
                                '&:hover': { backgroundColor: '#ddd' },
                            }}
                            onDrop={(e) => handleDrop(e, field)}
                            onDragOver={(e) => e.preventDefault()}
                            component="label"
                        >
                            <input type="file" hidden onChange={(e) => handleImageUpload(e, field)} />
                            <Icon sx={{ fontSize: 40, color: '#777' }}>
                                <ImageIcon />
                            </Icon>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Arrastra y suelta la imagen aquí o{' '}
                                <strong>selecciona el archivo</strong> que deseas subir
                            </Typography>

                            {imagenVistaPrevia[field] && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: 2,
                                    }}
                                >
                                    <img
                                        src={imagenVistaPrevia[field]}
                                        alt="Vista previa"
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '300px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                        }}
                                    />
                                </Box>
                            )}
                        </Box>
                    ))}

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
                            sx={{ width: '48%' }}
                        >
                            Crear Escultura
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

export default CrearEscultura;
