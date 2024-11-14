// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Importamos el slice del usuario
import votationReducer from './voteSlice';

const store = configureStore({
    reducer: {
        user: userReducer, // Reducer del usuario
        votation: votationReducer,  // Ensure this matches the name used in `useSelector`
    },
});

export default store;
