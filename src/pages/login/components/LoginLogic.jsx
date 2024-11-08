import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleGoogleLogin, handleGithubLogin } from '../../../auth/AuthHanddler.js';
import { clearRedirectPath } from '../../../store/redirectSlice.js';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated, role} = useSelector((state) => state.user); // Obtener el estado de autenticación
    const redirectPath = useSelector((state) => state.navigation.redirectPath);


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
            console.log('autenticado')
            if (redirectPath) {
                console.log(redirectPath)
                navigate(redirectPath); // Redirige a la ruta previa
                dispatch(clearRedirectPath()); // Limpia la ruta guardada
            } else if (role === 'admin') {
                navigate('/adminPanel');
            } else {
                navigate('/');
            }
        }
    }, [isAuthenticated, role, navigate, redirectPath, dispatch]); //el redirect patch y dispatch agarrarlo con pinzas capaz se saca che

    return { handleLogin };
};

export default useLoginLogic;
