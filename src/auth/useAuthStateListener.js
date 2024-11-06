// src/hooks/useAuthStateListener.js
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/userSlice';
import { auth, db } from '../auth/firebase';
import Cookies from 'js-cookie';
import { doc, getDoc } from 'firebase/firestore';

const useAuthStateListener = (setLoader) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Inicia el cargador al comenzar la verificación de autenticación
        setLoader(true);

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const token = await user.getIdToken();
                Cookies.set("authToken", token, { secure: false, sameSite: 'Lax' });

                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const { role, username, picture } = userDoc.data();
                    dispatch(login({
                        username: username || user.displayName,
                        role: role || "user",
                        picture: picture || user.photoURL,
                    }));
                } else {
                    console.error("Usuario no encontrado en Firestore");
                    dispatch(logout());
                }
            } else {
                dispatch(logout());
                Cookies.remove("authToken");
            }
            // Detiene el cargador cuando termina la verificación
            setLoader(false);
        });

        return () => unsubscribe(); // Limpia la suscripción al desmontar
    }, [dispatch, setLoader]);
};

export default useAuthStateListener;


