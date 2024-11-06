// src/apis/eventos.routes.js
import { eventosApi } from "./api-config";

// Crear evento
const createEvento = async (eventoData) => {
  try {
    const response = await eventosApi.post("/createEvent", eventoData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creando el evento:", error);
    throw error;
  }
};

// Obtener eventos (ejemplo)
const getEventos = async () => {
  try {
    const response = await eventosApi.get("/getAllEvents");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los eventos:", error);
    throw error;
  }
};

const getEventoPorId = async (id) => {
  try {
    const response = await eventosApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo el evento:', error);
    throw error;
  }
};

const eliminarEvento = async (id) => {
  try {
    const response = await eventosApi.delete(`/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el evento:', error);
    throw error;
  }
};

const getEventosPorRango = async (fechaInicio, fechaFin) => {
  try {
    const response = await eventosApi.get(`/filterEvents`, {
      params: {
        inicio: fechaInicio,
        fin: fechaFin,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error obteniendo los eventos por rango:', error);
    throw error;
  }
};

const actualizarEvento = async (id, eventoData) => {
  try {
    const response = await eventosApi.put(`/update/${id}`, eventoData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error actualizando el evento:', error);
    throw error;
  }
};

const getEventoActual = async () => {
  try {
    const response = await eventosApi.get("/currentEvent");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo el evento actual:", error);
    throw error;
  }
};

const getEventosFuturos = async () => {
  try {
    const response = await eventosApi.get("/futureEvents"); // Suponiendo que la ruta del backend es esta
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los eventos futuros:", error);
    throw error;
  }
};

const getEventosPasados = async () => {
  try {
    const response = await eventosApi.get("/pastEvents"); // Suponiendo que la ruta del backend es esta
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los eventos futuros:", error);
    throw error;
  }
};

export { createEvento, getEventos,getEventoPorId, getEventoActual, getEventosFuturos, getEventosPasados,
   eliminarEvento, getEventosPorRango, actualizarEvento };
