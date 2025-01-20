import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setToken, setUser } = authSlice.actions;