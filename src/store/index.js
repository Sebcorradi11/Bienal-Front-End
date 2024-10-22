// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Importamos el slice del usuario

const store = configureStore({
    reducer: {
        user: userReducer, // Reducer del usuario
    },
});

export default store;
