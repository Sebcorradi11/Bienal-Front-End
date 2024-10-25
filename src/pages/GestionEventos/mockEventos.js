// Simulación de datos iniciales
let eventos = [
    { id: 1, nombre: 'Bienal 2023', fecha: '12/07/2023' },
    { id: 2, nombre: 'Bienal 2024', fecha: '19/06/2024' },
    { id: 3, nombre: 'Bienal 2025', fecha: '04/09/2025' },
    { id: 4, nombre: 'Bienal 2025', fecha: '04/09/2025' },
    { id: 5, nombre: 'Bienal 2025', fecha: '04/09/2025' },
];

// Exportación de funciones simuladas

export const obtenerEventos = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(eventos);
        }, 500);
    });
};

export const obtenerEscultor = async (id) => {
    return new Promise((resolve, reject) => {
        const evento = eventos.find((e) => e.id === parseInt(id)); // Asegúrate de comparar como entero
        if (evento) {
            setTimeout(() => resolve(evento), 500); // Simulamos un retraso
        } else {
            reject('Evento no encontrado');
        }
    });
};


export const modificarEvento = async (id, datosActualizados) => {
    return new Promise((resolve, reject) => {
        const index = eventos.findIndex((e) => e.id === id);
        if (index !== -1) {
            eventos[index] = { ...eventos[index], ...datosActualizados };
            setTimeout(() => resolve(eventos[index]), 500);
        } else {
            reject('Evento no encontrado');
        }
    });
};

export const eliminarEvento = async (id) => {
    return new Promise((resolve, reject) => {
        const index = eventos.findIndex((e) => e.id === id);
        if (index !== -1) {
            eventos = eventos.filter((e) => e.id !== id);
            setTimeout(() => resolve({ mensaje: 'Evento eliminado' }), 500);
        } else {
            reject('Evento no encontrado');
        }
    });
};
