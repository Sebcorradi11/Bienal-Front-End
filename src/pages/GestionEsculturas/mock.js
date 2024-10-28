// mockEsculturas.js

export const mockEsculturas = [
    {
        _id: '1',
        nombre: 'Simpleza',
        tematica: 'Arte Abstracto',
        fechaCreacion: '2023-01-15',
        imagenPreEvento: 'https://via.placeholder.com/150',
        imagenDuranteEvento: 'https://via.placeholder.com/150',
        imagenPostEvento: 'https://via.placeholder.com/150',
    },
    {
        _id: '2',
        nombre: 'Peligro',
        tematica: 'Simplicidad y Orden',
        fechaCreacion: '2022-11-10',
        imagenPreEvento: 'https://via.placeholder.com/150',
        imagenDuranteEvento: 'https://via.placeholder.com/150',
        imagenPostEvento: 'https://via.placeholder.com/150',
    },
    {
        _id: '3',
        nombre: 'Amor',
        tematica: 'Futurismo',
        fechaCreacion: '2024-05-22',
        imagenPreEvento: 'https://via.placeholder.com/150',
        imagenDuranteEvento: 'https://via.placeholder.com/150',
        imagenPostEvento: 'https://via.placeholder.com/150',
    },
];


// Simulación de obtener todas las esculturas
export const getEsculturas = async () => {
    return mockEsculturas;
};

// Simulación de obtener una escultura por su ID
export const getEsculturaPorId = async (id) => {
    return mockEsculturas.find((escultura) => escultura._id === id);
};

export const actualizarEscultura = async (id, nuevaData) => {
    const index = esculturasMock.findIndex((escultura) => escultura.id === id);
    if (index === -1) throw new Error('Escultura no encontrada');
};
// Simulación de eliminar una escultura
export const eliminarEscultura = async (id) => {
    return mockEsculturas.filter((escultura) => escultura._id !== id);
};

