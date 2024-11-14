import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SculptorCard from './SculptorCard';
import { obtenerTodosSculptores } from '../../../api/Sculptores/sculptoresApi';

const SculptorList = () => {
    const [sculptors, setSculptors] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarEscultores = async () => {
            try {
                const data = await obtenerTodosSculptores();
                setSculptors(data);
            } catch (error) {
                setError('No se pudo cargar la lista de escultores.');
                console.error('Error al cargar escultores:', error);
            }
        };

        cargarEscultores();
    }, []);

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <Box sx={{ paddingY: 4, backgroundColor: '#fff' }}>
            <Grid container spacing={3} justifyContent="center">
                {sculptors.map((sculptor) => (
                    <Grid item key={sculptor.id} xs={12} sm={6} md={4} lg={3}>
                        <SculptorCard {...sculptor} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SculptorList;
