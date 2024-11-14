// src/apis/interceptor.js
import Cookies from 'js-cookie';
import { eventosApi, esculturasApi } from "./api-config";
import axios from 'axios';

// Interceptor para manejar requests y responses
const requestHandler = (request) => {
  // Solo agrega el token si el método no es GET
  if (request.method !== 'get') {
    const token = Cookies.get("authToken");
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
      console.log("Token añadido a la solicitud:", token);
    }
  }
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

export const configureInterceptors = () => {
  setUpInterceptors(eventosApi);
  setUpInterceptors(esculturasApi);
};

export default setUpInterceptors;
