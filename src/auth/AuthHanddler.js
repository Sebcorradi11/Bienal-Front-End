
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from './firebase';
import { setDoc, doc, getDocs, query, where, updateDoc, collection } from "firebase/firestore";
import { loginStart, login, loginFailure, logout } from '../store/userSlice';

export const handleGoogleLogin = (setError) => async (dispatch) => {
    dispatch(loginStart());
    const provider = new GoogleAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        const email = credentials.user.email;
        const role = 'user';

        // Consulta a Firestore para verificar si el correo electrónico ya existe
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // Si el correo ya existe, actualiza el documento
            const userDoc = querySnapshot.docs[0];
            await updateDoc(userDoc.ref, {
                username: credentials.user.displayName || "Usuario desconocido",
                role: userDoc.data().role || role,
                lastLogin: new Date().toISOString()
            });

            // Actualiza el estado en Redux
            dispatch(login({
                username: credentials.user.displayName,
                role: userDoc.data().role || role,
                picture: credentials.user.photoURL,
            }));
        } else {
            // Si el correo no existe, crea un nuevo documento
            const userRef = doc(usersRef, credentials.user.uid);
            await setDoc(userRef, {
                username: credentials.user.displayName || "Usuario desconocido",
                email: email || "email@desconocido.com",
                role: role,
                createdAt: new Date().toISOString()
            });

            // Actualiza el estado en Redux
            dispatch(login({
                username: credentials.user.displayName,
                role: role
            }));
        }

    } catch (error) {
        console.log("Error al iniciar sesión con Google:", error);
        dispatch(loginFailure(error.message));
        setError(error.message);
    }
};




export const handleGithubLogin = (setError) => async (dispatch) => {
    dispatch(loginStart());
    const provider = new GithubAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        const email = credentials.user.email;
        const role = 'user';

        // Consulta a Firestore para verificar si el correo electrónico ya existe
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // Si el correo ya existe, actualiza el documento
            const userDoc = querySnapshot.docs[0];
            await updateDoc(userDoc.ref, {
                username: credentials.user.displayName || "Usuario desconocido",
                role: userDoc.data().role || role,
                lastLogin: new Date().toISOString()
            });

            // Actualiza el estado en Redux
            dispatch(login({
                username: credentials.user.displayName,
                role: userDoc.data().role || role,
                picture: credentials.user.photoURL,
            }));
        } else {
            // Si el correo no existe, crea un nuevo documento
            const userRef = doc(usersRef, credentials.user.uid);
            await setDoc(userRef, {
                username: credentials.user.displayName || "Usuario desconocido",
                email: email || "email@desconocido.com",
                role: role,
                createdAt: new Date().toISOString()
            });

            // Actualiza el estado en Redux
            dispatch(login({
                username: credentials.user.displayName,
                role: role
            }));
        }

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