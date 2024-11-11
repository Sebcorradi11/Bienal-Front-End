import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleGoogleLogin, handleGithubLogin } from '../../../auth/AuthHanddler.js';
import { voted } from '../../../store/voteSlice.js';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated, role, email} = useSelector((state) => state.user); // Obtener el estado de autenticación
    
    const { isVotating, event, sculptor, puntuation } = useSelector((state) => state.votation);
    console.log(isVotating, event, sculptor, puntuation);

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
                    throw new Error('Plataforma no soportada');
            }
        setLoading(false);
    };

    // Usar useEffect para redirigir solo si el usuario está autenticado y basado en el rol
    useEffect(() => {
        if (isAuthenticated) {
            if(isVotating) {
                console.log('Voto exitoso', event, sculptor, puntuation, email);
                dispatch(voted());  
            }
            if (role === 'admin') {
                navigate('/adminPanel');
            } else {
                navigate('/');
            }
        }
    }, [isAuthenticated, role, navigate, isVotating, email]);

    return { handleLogin };
};

export default useLoginLogic;
