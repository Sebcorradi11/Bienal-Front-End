import { esculturasApi } from "./api-config";

// Crear escultura
const createEscultura = async (esculturaData) => {
  try {
    const response = await esculturasApi.post("/createSculpture", esculturaData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creando la escultura:", error);
    throw error;
  }
};

// Obtener todas las esculturas
const getEsculturas = async () => {
  try {
    const response = await esculturasApi.get("/getAllSculptures");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo las esculturas:", error);
    throw error;
  }
};

// Obtener escultura por ID
const getEsculturaPorId = async (id) => {
  try {
    const response = await esculturasApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo la escultura:", error);
    throw error;
  }
};

// Actualizar escultura
const actualizarEscultura = async (id, esculturaData) => {
  try {
    const response = await esculturasApi.put(`/update/${id}`, esculturaData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error actualizando la escultura:", error);
    throw error;
  }
};

// Eliminar escultura
const eliminarEscultura = async (id) => {
  try {
    const response = await esculturasApi.delete(`/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la escultura:", error);
    throw error;
  }
};

// Buscar esculturas por nombre
const buscarEsculturasPorNombre = async (nombre) => {
  try {
    const response = await esculturasApi.get("/searchSculpture", {
      params: { name: nombre },
    });
    return response.data;
  } catch (error) {
    console.error("Error buscando esculturas por nombre:", error);
    throw error;
  }
};

export {
  createEscultura,
  getEsculturas,
  getEsculturaPorId,
  actualizarEscultura,
  eliminarEscultura,
  buscarEsculturasPorNombre,
};