import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: {
    message: '',
  },
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = initialState.error;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
