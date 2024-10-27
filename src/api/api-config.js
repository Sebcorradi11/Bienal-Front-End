// src/apis/api-config.js
import axios from "axios";

// URLs base para cada microservicio (usando import.meta.env para Vite)
const urlServiceEventos = import.meta.env.VITE_URL_EVENTOS;
const urlServiceEsculturas = import.meta.env.VITE_URL_ESCULTURAS;

// Axios Instances
const eventosApi = axios.create({
  baseURL: urlServiceEventos,
  withCredentials: false,
});

const esculturasApi = axios.create({
  baseURL: urlServiceEsculturas,
  withCredentials: false,
});

export { eventosApi, esculturasApi };