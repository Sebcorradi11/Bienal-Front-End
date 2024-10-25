import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/userSlice.js';
import { handleGoogleLogin, handleFacebookLogin, handleGithubLogin} from '../../../auth/AuthHanddler.js';

const useLoginLogic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');

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
            navigate('/adminPanel');
        } catch (error) {
            setError('Error al iniciar sesión. Inténtalo nuevamente.');
        }
    };

    return { handleLogin, error };
};

export default useLoginLogic;
