// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Importamos el slice del usuario
import navigationReducer from './redirectSlice'; // Asegúrate de importar navigationReducer

const store = configureStore({
    reducer: {
        user: userReducer, // Reducer del usuario
        navigation: navigationReducer, // Incluye navigation en el store

    },
});

export default store;
