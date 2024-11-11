import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        role: 'user',
        username: '',
        email:'',
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
            state.email = action.payload.email;
        },
        loginFailure: (state) => {
            state.isAuthenticated = false;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.role = 'user';
            state.username = '';
            state.picture = '';
            state.email = '';
        },
        updateRole: (state, action) => {
            state.role = action.payload; 
        }
    }
});

export const { loginStart, login, loginFailure, logout, updateRole } = userSlice.actions;
export default userSlice.reducer;

