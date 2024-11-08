import { createSlice } from '@reduxjs/toolkit';

const voteSlice = createSlice({
  name: 'votation',
  initialState: {
    isVotating: false,
    event: '',
    sculptor: '',
    email: '',
    puntuation: '',
  },
  reducers: {
    nologged: (state, action) => {
      state.isVotating = true;
      state.event = action.payload.event;
      state.sculptor = action.payload.sculptor; 
      state.email = action.payload.email;
      state.puntuation = action.payload.puntuation;
    },
    voted: (state) => {
      state.isVotating = false;
      state.event = '';
      state.sculptor = '';
      state.email = '';
      state.puntuation = '';
    }
  }
});

export const { nologged, voted } = voteSlice.actions;
export default voteSlice.reducer;

