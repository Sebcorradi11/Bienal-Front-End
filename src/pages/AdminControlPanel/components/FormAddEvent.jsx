import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';

const FormAddEvent = ({ onSubmit }) => {
    const [eventData, setEventData] = useState({
        title: '',
        date: '',
        location: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(eventData);
            setEventData({ title: '', date: '', location: '', description: '' }); // Limpia el formulario después de enviar
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
            }}
        >
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
                Agregar Evento
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Título del Evento"
                        name="title"
                        value={eventData.title}
                        onChange={handleChange}
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Fecha"
                        name="date"
                        value={eventData.date}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Ubicación"
                        name="location"
                        value={eventData.location}
                        onChange={handleChange}
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Descripción"
                        name="description"
                        value={eventData.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        required
                    />
                </Grid>
            </Grid>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ alignSelf: 'center', marginTop: 2 }}
            >
                Agregar Evento
            </Button>
        </Box>
    );
};

export default FormAddEvent;
