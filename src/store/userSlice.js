import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        role: '',
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
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.username = '';
            state.role = '';
            state.loading = false;
            state.error = null;
        },
    },
});

export const { loginStart, login, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;