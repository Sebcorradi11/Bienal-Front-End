import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleGoogleLogin, handleFacebookLogin, handleGithubLogin } from '../../../auth/AuthHanddler.js';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Obtener el estado de autenticación

    const handleLogin = async (platform, setError) => {
            switch (platform) {
                case 'google':
                    await dispatch(handleGoogleLogin(setError));
                    break;
                case 'facebook':
                    await dispatch(handleFacebookLogin(setError));
                    break;
                case 'github':
                    await dispatch(handleGithubLogin(setError));
                    break;
                default:
                    throw new Error('Plataforma no soportada');
            }
    };


    useEffect(() => {
        if (isAuthenticated) {
            navigate('/adminPanel');
        }
    }, [isAuthenticated, navigate]);

    return { handleLogin };
};

export default useLoginLogic;
