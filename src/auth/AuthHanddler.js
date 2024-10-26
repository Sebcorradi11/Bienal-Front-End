// userThunks.js o AuthHandler.js
import { FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db  } from './firebase';
import { setDoc, doc } from "firebase/firestore";
import { loginStart, login, loginFailure, logout } from '../store/userSlice';

export const handleGoogleLogin = (setError) => async (dispatch) => {
    dispatch(loginStart());
    const provider = new GoogleAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        const email = credentials.user.email;
        const role = 'user';
        try {
            await setDoc(doc(db, "users", credentials.user.uid), {
                username: credentials.user.displayName || "Usuario desconocido",
                email: email || "email@desconocido.com",
                role: role,
                createdAt: new Date().toISOString()
            });
        } catch (firestoreError) {
            console.error("Error al guardar en Firestore:", firestoreError);
            throw new Error("No se pudo registrar el usuario en la base de datos.");
        }

        dispatch(login({
            username: credentials.user.displayName,
            role: role
        }));
    } catch (error) {
        console.log("Error al iniciar sesión con Google:", error);
        dispatch(loginFailure(error.message));
        setError(error.message);
    }
};

export const handleFacebookLogin = (setError) => async (dispatch) => {
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
        setError(error.message);
    }
};

export const handleGithubLogin = (setError) => async (dispatch) => {
    dispatch(loginStart());
    const provider = new GithubAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider); // Mueve esta línea aquí
        const email = credentials.user.email;
        const role = 'user';
        await setDoc(doc(db, "users", credentials.user.uid), {
            username: credentials.user.displayName || "Usuario desconocido",
            email: email || "email@desconocido.com",
            role: role,
            createdAt: new Date().toISOString()
        });
        dispatch(login({
            username: credentials.user.displayName,
            role: 'user'
        }));
    } catch (error) {
        console.log("Error al iniciar sesión con Github:", error);
        dispatch(loginFailure(error.message));
        setError(error.message);
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


