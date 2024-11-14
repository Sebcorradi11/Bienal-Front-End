// src/apis/sculptores/sculptoresApi.js
import { sculptoresApi } from '../api-config';

// Función para crear un sculptor
export const crearSculptor = async (data) => {
    try {
        const response = await sculptoresApi.post('/createSculptor', data);
        return response.data;
    } catch (error) {
        console.error('Error al crear sculptor:', error);
        throw error;
    }
};

// Función para obtener todos los sculptores
export const obtenerTodosSculptores = async () => {
    try {
        const response = await sculptoresApi.get('/getAllSculptors');
        console.log("Datos obtenidos del servidor:", response.data); // Verifica aquí
        return response.data;
    } catch (error) {
        console.error('Error al obtener sculptores:', error);
        throw error;
    }
};

export const getEscultorPorId = async (id) => {
    try {
        console.log(`Fetching escultor with ID from: /${id}`); // Log para verificar la URL generada
        const response = await sculptoresApi.get(`/${id}`); // Asegúrate de que aquí solo sea `/${id}`
        return response.data;
    } catch (error) {
        console.error('Error al obtener el escultor por ID:', error);
        throw error;
    }
};



export const actualizarSculptor = async (id, data) => {
    try {
        const response = await sculptoresApi.put(`/update/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el escultor:', error);
        throw error;
    }
};

export const eliminarSculptor = async (id) => {
    try {
        const response = await sculptoresApi.delete(`/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar sculptor:', error);
        throw error;
    }
};