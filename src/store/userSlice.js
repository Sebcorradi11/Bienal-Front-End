import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        role: '',
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.username = '';
            state.role = '';
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
