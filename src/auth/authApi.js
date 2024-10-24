export const sendTokenToBackend = async (token) => {
    const response = await fetch('https://your-backend-url.com/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({}),
    });

    if (!response.ok) {
        throw new Error('Error al autenticar con el backend');
    }

    return response.json();
};