import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEscultorPorId, actualizarSculptor } from '../../../../api/sculptores/sculptoresApi';

import HeaderPublic from '../../../../components/HeaderPublic';
import Footer from '../../../../components/Footer';
import fondoBoton from '../../../../assets/fondobutton/Rectangle 32.svg';
import AddIcon from '@mui/icons-material/Add';
import BackButton from '../../../../components/BackButton';

const ModificarEscultor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [escultor, setEscultor] = useState({
        name: '',
        lastName: '',
        biography: '',
        contactInfo: '',
        works: '',
        profileImage: null,
    });
    const [nuevaImagen, setNuevaImagen] = useState(null);

    useEffect(() => {
        const cargarEscultor = async () => {
            try {
                const data = await getEscultorPorId(id);
                setEscultor({
                    name: data.name || '',
                    lastName: data.lastName || '',
                    biography: data.biography || '',
                    contactInfo: data.contactInfo || '',
                    works: data.works || '',
                    profileImage: data.profileImage || null,
                });
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

    const handleModificar = async () => {
        const formData = new FormData();
        formData.append('name', escultor.name); // Campo de nombre
        formData.append('lastName', escultor.lastName); // Campo de apellido (agregado aquí)
        formData.append('country', escultor.country); // Si el país es necesario
        formData.append('biography', escultor.biography);
        formData.append('contactInfo', JSON.stringify(escultor.contactInfo)); 
    
        if (nuevaImagen) {
            formData.append('profileImage', nuevaImagen);
        }
    
        try {
            await actualizarSculptor(id, formData);
            alert('Escultor actualizado exitosamente');
            navigate(-1);
        } catch (error) {
            console.error('Error al actualizar el escultor:', error);
            alert('Error al actualizar el escultor');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderPublic />
            <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, backgroundColor: '#f5f5f5' }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ minHeight: '80vh' }}>
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography variant="h4" gutterBottom textAlign="center">
                            Modificar Escultor - {escultor.name} {escultor.lastName}
                        </Typography>

                        <TextField
                            label="Nombre"
                            name="name"
                            value={escultor.name}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Apellido"
                            name="lastName"
                            value={escultor.lastName}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Biografía"
                            name="biography"
                            value={escultor.biography}
                            onChange={handleChange}
                            multiline
                            rows={3}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Contacto"
                            name="contactInfo"
                            value={escultor.contactInfo}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                Imagen del Escultor
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item>
                                    {escultor.profileImage && (
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: 100,
                                                height: 100,
                                                overflow: 'hidden',
                                                borderRadius: '8px',
                                                mb: 1,
                                            }}
                                        >
                                            <img
                                                src={escultor.profileImage}
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
                                        <input type="file" hidden accept="image/*" onChange={handleAgregarImagen} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>

                        <Button
                            fullWidth
                            sx={{
                                height: '60px',
                                borderRadius: '30px',
                                backgroundImage: `url(${fondoBoton})`,
                                backgroundSize: 'cover',
                                color: 'white',
                                textTransform: 'none',
                                mb: 2,
                                '&:hover': { opacity: 0.9 },
                            }}
                            onClick={handleModificar}
                        >
                            <Typography variant="h6">Modificar Escultor</Typography>
                        </Button>

                        <BackButton sx={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default ModificarEscultor;
