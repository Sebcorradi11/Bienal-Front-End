import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid, IconButton } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
// import { getEscultorPorId, actualizarEscultor } from '../../../../api/escultores.routes';
import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/gestioneventos/Rectangle 32.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const ModificarEscultor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [escultor, setEscultor] = useState({
        nombre: '',
        apellido: '',
        biografia: '',
        contacto: '',
        obrasPrevias: '',
        imagen: null,
    });
    const [nuevaImagen, setNuevaImagen] = useState(null);

    useEffect(() => {
        const cargarEscultor = async () => {
            try {
                const data = await getEscultorPorId(id);
                setEscultor(data);
            } catch (error) {
                console.error('Error al cargar el escultor:', error);
            }
        };
        cargarEscultor();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEscultor({ ...escultor, [name]: value });
    };

    const handleAgregarImagen = (e) => {
        const file = e.target.files[0];
        setNuevaImagen(file);
        alert('Imagen cargada correctamente');
    };
    const handleModificarEsculturas = () => {
        navigate('/modificar-escultura/:id'); // Navega a la vista de agregar escultores
    };

    const handleModificar = async () => {
        const formData = new FormData();
        formData.append('nombre', escultor.nombre);
        formData.append('apellido', escultor.apellido);
        formData.append('biografia', escultor.biografia);
        formData.append('contacto', escultor.contacto);
        formData.append('obrasPrevias', escultor.obrasPrevias);

        if (nuevaImagen) {
            formData.append('imagen', nuevaImagen);
        }

        try {
            await actualizarEscultor(id, formData);
            alert('Escultor actualizado exitosamente');
            navigate(-1);
        } catch (error) {
            console.error('Error al actualizar el escultor:', error);
            alert('Error al actualizar el escultor');
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
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ minHeight: '80vh' }}>
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography variant="h4" gutterBottom textAlign="center">
                            Modificar Escultor - {escultor.nombre} {escultor.apellido}
                        </Typography>

                        {/* Campos del formulario */}
                        <TextField
                            label="Nombre"
                            name="nombre"
                            value={escultor.nombre}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Apellido"
                            name="apellido"
                            value={escultor.apellido}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Biografía"
                            name="biografia"
                            value={escultor.biografia}
                            onChange={handleChange}
                            multiline
                            rows={3}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Contacto"
                            name="contacto"
                            value={escultor.contacto}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Obras Previas"
                            name="obrasPrevias"
                            value={escultor.obrasPrevias}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        {/* Gestionar imagen */}
                        <Box sx={{ marginBottom: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                Imagen del Escultor
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item>
                                    {escultor.imagen && (
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: 100,
                                                height: 100,
                                                overflow: 'hidden',
                                                borderRadius: '8px',
                                                marginBottom: 1,
                                            }}
                                        >
                                            <img
                                                src={escultor.imagen}
                                                alt="Imagen del escultor"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </Box>
                                    )}
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        sx={{
                                            height: 100,
                                            width: 100,
                                            backgroundImage: `url(${fondoBoton})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: 'white',
                                            borderRadius: 8,
                                            textTransform: 'none',
                                        }}
                                    >
                                        <AddIcon />
                                        <input
                                            type="file"
                                            hidden
                                            accept="image/*"
                                            onChange={handleAgregarImagen}
                                        />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>

                        <Button
                            fullWidth
                            onClick={handleModificarEsculturas}
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

                        {/* Botones de Modificar Escultor y Atrás */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 2,
                                flexDirection: { xs: 'column', sm: 'row' },
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={handleModificar}
                                sx={{
                                    width: { xs: '100%', sm: '48%' },
                                    height: '60px',
                                    borderRadius: '30px',
                                    backgroundImage: `url(${fondoBoton})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    color: 'white',
                                    textTransform: 'none',
                                    '&:hover': { opacity: 0.9 },
                                }}
                            >
                                Modificar Escultor
                            </Button>
                            <Button
                                startIcon={<ArrowBackIcon />}
                                variant="outlined"
                                color="secondary"
                                onClick={handleAtras}
                                sx={{ width: { xs: '100%', sm: '48%' } }}
                            >
                                Atrás
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default ModificarEscultor;
