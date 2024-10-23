import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/userSlice.js';
import { handleGoogleLogin, handleFacebookLogin, handleInstagramLogin } from '../../../auth/AuthHanddler.js';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const handleLogin = async (platform) => {
        try {
            let userData;
            switch (platform) {
                case 'google':
                    userData = await handleGoogleLogin();
                    break;
                case 'facebook':
                    userData = await handleFacebookLogin();
                    break;
                case 'instagram':
                    userData = await handleInstagramLogin();
                    break;
                default:
                    throw new Error('Plataforma no soportada');
            }

            if (userData) {
                const { username, role } = userData;
                dispatch(login({ username, role }));
                navigate('/HomeUser');
            }
        } catch (error) {
            setError('Error al iniciar sesión. Inténtalo nuevamente.');
        }
    };

    return { handleLogin, error };
};

export default useLoginLogic;
