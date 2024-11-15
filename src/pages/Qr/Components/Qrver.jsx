import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import HeaderPublic from '../../../components/HeaderPublic';
import Footer from '../../../components/Footer';
const QrVer = () => {
    const { Idevento, Idescultor } = useParams();
    const [qrCodeImage, setQrCodeImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timer, setTimer] = useState(60);
    const qrUrl=import.meta.env.VITE_URL_QR;

    // Función para obtener el QR desde el backend
    const fetchQRCode = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${qrUrl}/generate-qr/${Idevento}/${Idescultor}`);
            setQrCodeImage(response.data.qrCodeImage);
            setTimer(60); // Reinicia el contador
        } catch (error) {
            console.error("Error al obtener el QR:", error);
        } finally {
            setLoading(false);
        }
    };

    // Llama a fetchQRCode cuando se carga el componente
    useEffect(() => {
        fetchQRCode();
    }, []);

    // Manejo del contador de 60 segundos
    useEffect(() => {
        if (timer === 0) {
            fetchQRCode();
        }

        const interval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [timer]);

    return (
        <Box>
            <HeaderPublic />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Código QR para el Escultor
                </Typography>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <img src={qrCodeImage} alt="QR Code" style={{ width: '200px', height: '200px', marginBottom: '20px' }} />
                        <Typography variant="body1">Válido por: {timer} segundos</Typography>
                    </>
                )}
            </Box>
            <Footer />
        </Box>
    );
};

export default QrVer;
