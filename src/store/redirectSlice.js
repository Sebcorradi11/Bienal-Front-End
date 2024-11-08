// src/store/slices/navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    redirectPath: null,
  },
  reducers: {
    setRedirectPath: (state, action) => {
      state.redirectPath = action.payload;
    },
    clearRedirectPath: (state) => {
      state.redirectPath = null;
    },
  },
});

export const { setRedirectPath, clearRedirectPath } = navigationSlice.actions;
export default navigationSlice.reducer;