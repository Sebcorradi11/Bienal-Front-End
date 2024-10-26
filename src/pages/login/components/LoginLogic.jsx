import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleGoogleLogin, handleGithubLogin } from '../../../auth/AuthHanddler.js';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated, role} = useSelector((state) => state.user); // Obtener el estado de autenticación

    const handleLogin = async (platform, setError) => {
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
    };

    // Usar useEffect para redirigir solo si el usuario está autenticado y basado en el rol
    useEffect(() => {
        if (isAuthenticated) {
            if (role === 'admin') {
                navigate('/adminPanel');
            } else {
                navigate('/esculturas');
            }
        }
    }, [isAuthenticated, role, navigate]);

    return { handleLogin };
};

export default useLoginLogic;
