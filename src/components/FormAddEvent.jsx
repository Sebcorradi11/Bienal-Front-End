import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormAddEvent = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        theme: '',
        date: '',
        place: '',
        description: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Agregar Evento
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {/** Inputs */}
                    <Grid item xs={12}>
                        <TextField
                            label="Temática"
                            name="theme"
                            value={formData.theme}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Fecha del evento"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Lugar del evento"
                            name="place"
                            value={formData.place}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Descripción"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={4}
                            required
                        />
                    </Grid>
                </Grid>

                {/** Botones */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                    <Button variant="contained" color="primary" type="submit">
                        Agregar Evento
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => navigate('/gestionar-eventos')}>
                        Atrás
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default FormAddEvent;
