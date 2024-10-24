import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 
import { auth } from './firebase.js';

export const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try{
        const credentials = await signInWithPopup(auth,provider);
        const token = await credentials.user.getIdToken();
        return{
            username: credentials.user.displayName,
            token: token,
            role: 'user',
           
            }
        
    }catch(error){
        console.log("Error al iniciar sesión con Facebook:", error);
        throw error;
     
    }
};


export const handleGoogleLogin = async() => {
   const provider = new GoogleAuthProvider();
    try{
        const credentials = await signInWithPopup(auth,provider);
        const token = await credentials.user.getIdToken();
        return{
            username: credentials.user.displayName,
            token: token,
            role: 'user',
           
            }
        
    }catch(error){
        console.log("Error al iniciar sesión con Google:", error);
        throw error;
     
    }
}

    
 

