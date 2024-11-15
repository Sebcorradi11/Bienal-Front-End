import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import HeaderPublic from '../../components/HeaderPublic';
import SculptorVote from './components/SculptorVote';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VotesPage = () => {
    const { id_escultor, id_evento, token } = useParams();
    const [habilitado, setHabilitado] = useState(false);
    const qrUrl = import.meta.env.VITE_URL_QR;

    // Función para verificar el token
    const verificarToken = async () => {
        try {
            const response = await axios.get(`${qrUrl}/verify-token/${token}/${id_evento}/${id_escultor}`);            
            if (response.status === 200) {
                setHabilitado(true); // Habilita la votación si el token es válido
            }
        } catch (error) {
            console.error('El token no es válido o ha expirado.', error);
            setHabilitado(false); // Deshabilita la votación si el token es inválido o ha expirado
        }
    };

    useEffect(() => {
        verificarToken(); // Verifica el token al cargar la página
    }, []);

    return (
        <>  
            <HeaderPublic />
            {habilitado ? (
                <SculptorVote evento={id_evento} id_escultor={id_escultor}/>
            ) : (
                <p>La votación no está habilitada o el QR ha expirado.</p>
            )}
            <Footer />
        </>
    );
};

export default VotesPage;



