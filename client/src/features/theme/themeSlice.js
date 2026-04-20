import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("portfolioTheme");

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: storedTheme || "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("portfolioTheme", state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("portfolioTheme", state.mode);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

