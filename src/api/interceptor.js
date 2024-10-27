// src/apis/interceptor.js
import { eventosApi, esculturasApi } from "./api-config";

// Interceptor para manejar requests y responses
const requestHandler = (request) => {
  // Agregar cualquier encabezado o token aquí
  request.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  console.error("Error en la petición:", error);
  return Promise.reject(error);
};

// Agregar los interceptores a las instancias de Axios
const setUpInterceptors = () => {
  eventosApi.interceptors.request.use(requestHandler, errorHandler);
  esculturasApi.interceptors.request.use(requestHandler, errorHandler);
};

export default setUpInterceptors;
