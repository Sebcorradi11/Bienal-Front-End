import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Icon } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackButton from '../../../../components/BackButton';
// import { createEscultor } from '../../../../api/escultores.routes'; // Importar la función desde escultores.routes.js

const CrearEscultor = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        biografia: '',
        contacto: '',
        obrasPrevias: '',
        imagen: null,
    });
    const [imagen, setImagen] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, imagen: file });
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagen(reader.result);
            reader.readAsDataURL(file);
        }
    };
    const handleAgregarEsculturas = () => {
        navigate('/agregar-escultura'); // Navega a la vista de agregar escultores
    };


    const handleCrearEscultor = async () => {
        const data = new FormData();
        data.append('nombre', formData.nombre);
        data.append('apellido', formData.apellido);
        data.append('biografia', formData.biografia);
        data.append('contacto', formData.contacto);
        data.append('obrasPrevias', formData.obrasPrevias);
        if (formData.imagen) {
            data.append('imagen', formData.imagen);
        }

        try {
            const response = await createEscultor(data);
            console.log('Escultor creado:', response);
            alert('Escultor creado exitosamente.');
            setFormData({
                nombre: '',
                apellido: '',
                biografia: '',
                contacto: '',
                obrasPrevias: '',
                imagen: null,
            });
            setImagen(null);
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Error al crear el escultor:', error);
            alert('Error al crear el escultor. Inténtalo de nuevo.');
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
                    Crear Escultor
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
                        label="Apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Biografía"
                        name="biografia"
                        value={formData.biografia}
                        onChange={handleChange}
                        multiline
                        rows={3}
                        fullWidth
                    />
                    <TextField
                        label="Contacto"
                        name="contacto"
                        value={formData.contacto}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Obras Previas"
                        name="obrasPrevias"
                        value={formData.obrasPrevias}
                        onChange={handleChange}
                        fullWidth
                    />

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
                                alt="Imagen del escultor"
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
                        onClick={handleAgregarEsculturas}
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
                        <Typography variant="h6">Esculturas</Typography>
                    </Button>

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
                            onClick={handleCrearEscultor}
                            sx={{ width: '48%' }}
                        >
                            Crear Escultor
                        </Button>
                        <BackButton sx={{ width: '48%' }} />
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default CrearEscultor;
