import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleGoogleLogin, handleFacebookLogin } from '../../../auth/AuthHanddler.js';
import { useHandleLogin } from '../../../auth/useHandleLogin.js';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    // Hooks personalizados para manejar Google y Facebook
    const googleLoginMutation = useHandleLogin(handleGoogleLogin);
    const facebookLoginMutation = useHandleLogin(handleFacebookLogin);

    const handleLogin = async (platform) => {
        try {
            switch (platform) {
                case 'google':
                    googleLoginMutation.mutate(null, {
                        onSuccess: () => navigate('/adminPanel'),
                        onError: () => setError('Error al iniciar sesión con Google. Inténtalo nuevamente.'),
                    });
                    break;
                case 'facebook':
                    facebookLoginMutation.mutate(null, {
                        onSuccess: () => navigate('/adminPanel'),
                        onError: () => setError('Error al iniciar sesión con Facebook. Inténtalo nuevamente.'),
                    });
                    break;
                default:
                    throw new Error('Plataforma no soportada');
            }
        } catch (error) {
            setError('Error al iniciar sesión. Inténtalo nuevamente.');
        }
    };

    return { handleLogin, error };
};

export default useLoginLogic;