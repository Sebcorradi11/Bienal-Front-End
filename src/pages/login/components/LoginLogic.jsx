import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleGoogleLogin, handleFacebookLogin, handleGithubLogin } from '../../../auth/AuthHanddler.js';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const { isAuthenticated, role } = useSelector((state) => state.user); // Obtener estado de autenticación y rol

    const handleLogin = async (platform) => {
        try {
            switch (platform) {
                case 'google':
                    await dispatch(handleGoogleLogin());
                    break;
                case 'facebook':
                    await dispatch(handleFacebookLogin());
                    break;
                case 'github':
                    await dispatch(handleGithubLogin());
                    break;
                default:
                    throw new Error('Plataforma no soportada');
            }
        } catch (error) {
            console.log(error);
            setError('Error al iniciar sesión. Inténtalo nuevamente.');
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

    return { handleLogin, error };
};

export default useLoginLogic;
