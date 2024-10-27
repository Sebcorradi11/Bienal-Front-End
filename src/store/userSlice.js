import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        role: 'user',
        username: '',
        picture: '',
    },
    reducers: {
        loginStart: (state) => {
            state.isAuthenticated = false;
        },
        login: (state, action) => {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.picture = action.payload.picture;
            state.role = action.payload.role;
        },
        loginFailure: (state) => {
            state.isAuthenticated = false;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.role = 'user';
            state.username = '';
            state.picture = '';
        },
        updateRole: (state, action) => {
            state.role = action.payload; // Actualiza el rol en el estado de Redux
        }
    }
});

export const { loginStart, login, loginFailure, logout, updateRole } = userSlice.actions;
export default userSlice.reducer;

