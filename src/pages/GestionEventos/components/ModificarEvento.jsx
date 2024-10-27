import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerEscultor } from '../mockEventos';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
import fondoBoton from '../../../assets/gestioneventos/Rectangle 32.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ModificarEvento = () => {
    const { id } = useParams(); // Obtiene el ID de la URL
    const navigate = useNavigate(); // Hook para navegar
    const [evento, setEvento] = useState({
        nombre: '',
        fecha: '',
        lugar: '',
        descripcion: '',
    });

    const [tituloEvento, setTituloEvento] = useState('');

    useEffect(() => {
        const cargarEvento = async () => {
            const data = await obtenerEscultor(id);
            setEvento(data);
            setTituloEvento(data.nombre);
        };
        cargarEvento();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvento({ ...evento, [name]: value });
    };

    const handleModificar = () => {
        console.log('Evento modificado:', evento); // Simulación de modificación
    };

    const handleAtras = () => {
        navigate(-1); // Navega a la página anterior
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
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: '80vh' }}
                >
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography variant="h4" gutterBottom textAlign="center">
                            Modificar Evento - {tituloEvento}
                        </Typography>

                        <TextField
                            label="Nombre del Evento"
                            name="nombre"
                            value={evento.nombre}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        <TextField
                            label="Fecha del Evento"
                            type="date"
                            name="fecha"
                            value={evento.fecha}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        <TextField
                            label="Lugar del Evento"
                            name="lugar"
                            value={evento.lugar}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        <TextField
                            label="Descripción del Evento"
                            name="descripcion"
                            value={evento.descripcion}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />

                        <Button
                            fullWidth
                            sx={{
                                height: '60px',
                                borderRadius: '30px',
                                backgroundImage: `url(${fondoBoton})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': { opacity: 0.9 },
                                marginBottom: 3, // Espacio inferior para separar los botones
                            }}
                        >
                            <Typography variant="h6">Escultores</Typography>
                        </Button>

                        {/* Botones de Modificar Evento y Atrás */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 2,
                                flexDirection: { xs: 'column', sm: 'row' }, // Alineación en columna en pantallas pequeñas
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleModificar}
                                sx={{
                                    width: { xs: '100%', sm: '48%' }, // 100% en móvil, 48% en pantallas grandes
                                }}
                            >
                                Modificar Evento
                            </Button>
                            <Button
                                startIcon={<ArrowBackIcon />}
                                variant="outlined"
                                color="secondary"
                                onClick={handleAtras}
                                sx={{
                                    width: { xs: '100%', sm: '48%' }, // 100% en móvil, 48% en pantallas grandes
                                }}
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

export default ModificarEvento;
