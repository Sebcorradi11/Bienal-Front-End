import React, { useState, useEffect } from 'react';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import BackButton from '../../components/BackButton';
import ButtonNavigate from '../../components/ButtonNavigate';
import BuscadorEscultura from '../../components/Buscador';
import ListaEsculturas from './components/ListaEsculturas';
import { getEsculturas } from '../../api/sculptures.routes';

const GestionarEsculturas = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [esculturas, setEsculturas] = useState([]);
    const [filtroEsculturas, setFiltroEsculturas] = useState([]);
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    useEffect(() => {
        // Cargar todas las esculturas al cargar el componente
        const cargarEsculturas = async () => {
            try {
                const data = await getEsculturas();
                setEsculturas(data);
                setFiltroEsculturas(data); // Mostrar todas inicialmente
            } catch (error) {
                console.error("Error al cargar las esculturas:", error);
            }
        };

        cargarEsculturas();
    }, []);

    const handleBuscar = (nombre) => {
        setTerminoBusqueda(nombre); // Actualizar el término de búsqueda
        if (nombre.trim() === "") {
            setFiltroEsculturas(esculturas); // Mostrar todas si el buscador está vacío
        } else {
            const resultados = esculturas.filter((escultura) =>
                escultura.name.toLowerCase().includes(nombre.toLowerCase())
            );
            setFiltroEsculturas(resultados);
        }
    };

    const handleEliminarEscultura = (id) => {
        // Actualizar el estado eliminando la escultura con el ID dado
        const esculturasActualizadas = filtroEsculturas.filter((escultura) => escultura._id !== id);
        setEsculturas(esculturasActualizadas);
        setFiltroEsculturas(esculturasActualizadas);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderPublic />

            <Container sx={{ mt: 4, flexGrow: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row',
                        alignItems: 'center',
                        gap: 2,
                        mb: 3,
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-start' }}>
                        <ButtonNavigate name="Crear Esculturas" route="/crear-escultura" />
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        {/* Aquí podrías agregar filtros adicionales */}
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-end' }}>
                        <BuscadorEscultura onBuscar={handleBuscar} />
                    </Box>
                </Box>

                <ListaEsculturas 
                    esculturas={filtroEsculturas} 
                    terminoBusqueda={terminoBusqueda} 
                    onEliminar={handleEliminarEscultura} 
                />

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
                    <BackButton sx={{ width: '48%' }} />
                </Box>
            </Container>

            <Footer />
        </Box>
    );
};

export default GestionarEsculturas;
