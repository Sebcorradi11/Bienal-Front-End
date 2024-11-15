import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { getEsculturas } from '../../../api/sculptures.routes';
import SculptureCard from './SculptureCard';
import { useNavigate } from 'react-router-dom';

const ListaEsculturas = () => {
    const [esculturas, setEsculturas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarEsculturas();
    }, []);

    const cargarEsculturas = async () => {
        try {
            const data = await getEsculturas();
            setEsculturas(data);
        } catch (error) {
            console.error('Error al cargar las esculturas:', error);
        }
    };

    return (
        <Box sx={{ padding: { xs: 2, md: 3 }, marginTop: 3 }}>
            {esculturas.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
                    No hay esculturas disponibles
                </Typography>
            ) : (
                <Grid container spacing={2} justifyContent="center">
                    {esculturas.map((escultura) => (
                        <Grid item key={escultura._id}>
                            <SculptureCard
                                title={escultura.name}
                                image={escultura.imagenPre || '/placeholder-image.jpg'}
                                id={escultura._id}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default ListaEsculturas;
