import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid, IconButton } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEsculturaPorId, actualizarEscultura } from '../mock';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import fondoBoton from '../../../assets/gestionesculturas/Rectangle 32.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const ModificarEscultura = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [escultura, setEscultura] = useState({
        nombre: '',
        tematica: '',
        fechaCreacion: '',
        imagenPreEvento: '',
        imagenDuranteEvento: '',
        imagenPostEvento: '',
    });
    const [nuevasImagenes, setNuevasImagenes] = useState([]);
    const [imagenesAEliminar, setImagenesAEliminar] = useState([]);

    useEffect(() => {
        const cargarEscultura = async () => {
            try {
                const data = await getEsculturaPorId(id);
                setEscultura(data);
            } catch (error) {
                console.error('Error al cargar la escultura:', error);
            }
        };
        cargarEscultura();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEscultura({ ...escultura, [name]: value });
    };

    const handleAgregarImagen = (e) => {
        const files = e.target.files;
        setNuevasImagenes([...nuevasImagenes, ...files]);
        alert('Imagen cargada correctamente');
    };

    const handleEliminarImagen = (imagen) => {
        setImagenesAEliminar([...imagenesAEliminar, imagen]);
        setEscultura({
            ...escultura,
            [imagen]: '', // Remover la referencia de imagen en el estado
        });
    };

    const handleModificar = async () => {
        const formData = new FormData();
        formData.append('nombre', escultura.nombre);
        formData.append('tematica', escultura.tematica);
        formData.append('fechaCreacion', escultura.fechaCreacion);

        nuevasImagenes.forEach((file) => {
            formData.append('imagenes', file);
        });

        formData.append('imagenesAEliminar', JSON.stringify(imagenesAEliminar));

        try {
            await actualizarEscultura(id, formData);
            alert('Escultura actualizada exitosamente');
            navigate(-1);
        } catch (error) {
            console.error('Error al actualizar la escultura:', error);
            alert('Error al actualizar la escultura');
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
                            Modificar Escultura - {escultura.nombre}
                        </Typography>

                        <TextField
                            label="Nombre de la Escultura"
                            name="nombre"
                            value={escultura.nombre}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Temática"
                            name="tematica"
                            value={escultura.tematica}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Fecha de Creación"
                            type="date"
                            name="fechaCreacion"
                            value={escultura.fechaCreacion}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        <Typography variant="body1" gutterBottom>
                            Imágenes de la Escultura
                        </Typography>

                        <Grid container spacing={1}>
                            {['imagenPreEvento', 'imagenDuranteEvento', 'imagenPostEvento'].map((imagenKey) => (
                                <Grid item key={imagenKey}>
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
                                        {escultura[imagenKey] && (
                                            <img
                                                src={escultura[imagenKey]}
                                                alt={`Imagen ${imagenKey}`}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        )}
                                        <IconButton
                                            onClick={() => handleEliminarImagen(imagenKey)}
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                color: 'white',
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            ))}
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
                                        multiple
                                        accept="image/*"
                                        onChange={handleAgregarImagen}
                                    />
                                </Button>
                            </Grid>
                        </Grid>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
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
                                Modificar Escultura
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

export default ModificarEscultura;
