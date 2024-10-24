import { useMutation } from 'react-query';
import { sendTokenToBackend } from './authApi';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';

export const useHandleLogin = (loginMethod) => {
    const dispatch = useDispatch();

    return useMutation(async () => {
        const { token, username, role } = await loginMethod(); // Llama a handleGoogleLogin o handleFacebookLogin
        const response = await sendTokenToBackend(token);      // Envía el token al backend
        // Aquí puedes procesar la respuesta del backend si es necesario
        dispatch(login({ username, role }));
        return response;
    });
};