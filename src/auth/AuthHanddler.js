
export const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Usuario autenticado con Facebook:", user);
    } catch (error) {
        console.error("Error al iniciar sesión con Facebook:", error.message);
    }
};


export const handleGoogleLogin = () => {

    window.location.href = 'https://accounts.google.com/';
};

export const handleInstagramLogin = () => {

    window.location.href = 'https://www.instagram.com/';
};