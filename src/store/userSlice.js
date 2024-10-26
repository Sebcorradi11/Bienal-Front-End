import { createSlice } from '@reduxjs/toolkit';

// userSlice.js
const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        role: '',
        isAuthenticated: false, // Estado de autenticación
        loading: false,
        error: null,
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        login: (state, action) => {
            state.loading = false;
            state.username = action.payload.username;
            state.role = action.payload.role;
            state.isAuthenticated = true; // Cambiar a true cuando se inicia sesión
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.username = '';
            state.role = '';
            state.isAuthenticated = false; // Cambiar a false al cerrar sesión
            state.loading = false;
            state.error = null;
        },
    },
});

export const { loginStart, login, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
