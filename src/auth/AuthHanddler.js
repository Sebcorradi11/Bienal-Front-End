import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 
import { auth } from './firebase.js';
export const handleFacebookLogin = async () => {
 
};


export const handleGoogleLogin = async() => {
   const provider = new GoogleAuthProvider();
    try{
        const credentials = await signInWithPopup(auth,provider);
        return{
            username: credentials.user.displayName,
            role: 'user',
           
            }
        
    }catch(error){
        console.log("Error al iniciar sesión con Google:", error);
        throw error;
     
    }
}

    
 


export const handleInstagramLogin = () => {

  
};