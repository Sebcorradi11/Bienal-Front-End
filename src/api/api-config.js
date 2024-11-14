// src/apis/api-config.js
import axios from "axios";

// URLs base para cada microservicio (usando import.meta.env para Vite)
const urlServiceEventos = import.meta.env.VITE_URL_EVENTOS;
const urlServiceEsculturas = import.meta.env.VITE_URL_ESCULTURAS;
const urlServiceVotacion = import.meta.env.VITE_URL_VOTACION;
const urlServiceSculptores = import.meta.env.VITE_URL_VOTACION;

// Axios Instances
const eventosApi = axios.create({
  baseURL: urlServiceEventos,
  withCredentials: false,
});

// Instancia de Axios para sculptores
const sculptoresApi = axios.create({
  baseURL: urlServiceSculptores,
  withCredentials: false,
});

const esculturasApi = axios.create({
  baseURL: urlServiceEsculturas,
  withCredentials: false,
});

const votacionApi = axios.create({
  baseURL: urlServiceVotacion,
  withCredentials: false,
});


const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false // Permite enviar cookies en solicitudes
});

export const verificarAutenticacion = () => {
  apiClient.post("/auth")
    .then(response => {
      console.log("Respuesta del backend:", response.data);
    })
    .catch(error => {
      console.error("Error al comunicarse con el backend:", error);
    });
};

export { eventosApi, esculturasApi, votacionApi, sculptoresApi  };
