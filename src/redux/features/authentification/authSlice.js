import { createSlice } from '@reduxjs/toolkit';

export const authentificationSlice = createSlice({
  name: 'authentification',
  initialState: {
    value: true,
  },
  reducers: {
    isAuthorized: (state) => {
      if (state.value === false) {
        state.value = true;
      } else {
        state.value = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { isAuthorized } = authentificationSlice.actions;

export default authentificationSlice.reducer;
