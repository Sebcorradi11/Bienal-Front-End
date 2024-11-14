import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleGoogleLogin, handleGithubLogin } from '../../../auth/AuthHanddler.js';
import { voted } from '../../../store/voteSlice.js';
import { vote } from '../../../api/votacion.routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, role, email } = useSelector((state) => state.user);
    const { isVotating, event, sculptor, puntuation } = useSelector((state) => state.votation);

    const handleLogin = async (platform, setError, setLoading) => {
        setLoading(true);
        switch (platform) {
            case 'google':
                await dispatch(handleGoogleLogin(setError));
                break;
            case 'github':
                await dispatch(handleGithubLogin(setError));
                break;
            default:
                throw new Error('Unsupported platform');
        }
        setLoading(false);
    };


    useEffect(() => {
        if (isAuthenticated) {
            if (isVotating) {
                // Preparar datos para el voto
                const voteData = {
                    userId: email,
                    sculptureId: sculptor,
                    eventId: event,
                    score: puntuation,
                };
    
                // Enviar voto al backend
                vote(voteData)
                    .then(response => {
                        console.log('Vote submitted successfully:', response);
                        toast.success("Voto registrado con éxito!");
    
                        dispatch(voted()); // Limpiar el estado de voto pendiente
    
                        // Retrasar la navegación para mostrar el toast
                        setTimeout(() => {
                            // Redirigir según el rol
                            if (role === 'admin') {
                                navigate('/adminPanel');
                            } else {
                                navigate('/');
                            }
                        }, 2000); // Retraso de 2 segundos para que el toast se muestre
                    })
                    .catch(error => {
                        console.error('Error submitting vote:', error);
                        toast.error("Error al enviar el voto. " + error.response.data.error);
                        dispatch(voted())
                        setTimeout(() => {
                            // Redirigir según el rol
                            if (role === 'admin') {
                                navigate('/adminPanel');
                            } else {
                                navigate('/');
                            }
                        }, 2000); // Retraso de 2 segundos para que el toast se muestre
                    });
            } else if (!isVotating){
                setTimeout(() => {
                    // Redirigir según el rol
                    if (role === 'admin') {
                        navigate('/adminPanel');
                    } else {
                        navigate('/');
                    }
                }, 2000);
            }
        }
    }, [isAuthenticated, role, navigate, isVotating, email, dispatch]);
    

    return { handleLogin };
};

export default useLoginLogic;