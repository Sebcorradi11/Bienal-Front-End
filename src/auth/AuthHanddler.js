// userThunks.js o AuthHandler.js
import { FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './firebase';
import { loginStart, login, loginFailure, logout } from '../store/userSlice';

export const handleGoogleLogin = () => async (dispatch) => {
    dispatch(loginStart());
    const provider = new GoogleAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        dispatch(login({
            username: credentials.user.displayName,
            role: 'user'
        }));
    } catch (error) {
        console.log("Error al iniciar sesión con Google:", error);
        dispatch(loginFailure(error.message));
    }
};

export const handleFacebookLogin = () => async (dispatch) => {
    dispatch(loginStart());
    const provider = new FacebookAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        dispatch(login({
            username: credentials.user.displayName,
            role: 'user'
        }));
    } catch (error) {
        console.log("Error al iniciar sesión con Facebook:", error);
        dispatch(loginFailure(error.message));
    }
};

export const handleGithubLogin = () => async (dispatch) => {
    dispatch(loginStart());
    const provider = new GithubAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        dispatch(login({
            username: credentials.user.displayName,
            role: 'user'
        }));
    } catch (error) {
        console.log("Error al iniciar sesión con Github:", error);
        dispatch(loginFailure(error.message));
    }
};

export const handleLogout = () => async (dispatch) => {
    try {
        await signOut(auth);//  finaliza la sesión en firebase
        dispatch(logout());//limpia el estado de usuario en Redux
    } catch (error) {
        console.error("Logout error:", error);
    }
};


