import { createSlice } from "@reduxjs/toolkit";

const storedAuth = JSON.parse(localStorage.getItem("portfolioAuth") || "null");

const initialState = {
  token: storedAuth?.token || null,
  user: storedAuth?.user || null,
};

const persistAuth = (state) => {
  if (state.token && state.user) {
    localStorage.setItem(
      "portfolioAuth",
      JSON.stringify({ token: state.token, user: state.user }),
    );
    return;
  }

  localStorage.removeItem("portfolioAuth");
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      persistAuth(state);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      persistAuth(state);
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;

