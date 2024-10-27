// src/apis/eventos.routes.js
import { eventosApi } from "./api-config";

// Crear evento
const createEvento = async (eventoData) => {
  try {
    const response = await eventosApi.post("/eventos", eventoData, {
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
    const response = await eventosApi.get("/eventos");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los eventos:", error);
    throw error;
  }
};

export { createEvento, getEventos };
