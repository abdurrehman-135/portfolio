import { createSlice } from "@reduxjs/toolkit";

const projectFiltersSlice = createSlice({
  name: "projectFilters",
  initialState: {
    category: "All",
    technology: "All",
    search: "",
  },
  reducers: {
    resetProjectFilters: (state) => {
      state.category = "All";
      state.technology = "All";
      state.search = "";
    },
    setProjectCategory: (state, action) => {
      state.category = action.payload;
    },
    setProjectSearch: (state, action) => {
      state.search = action.payload;
    },
    setProjectTechnology: (state, action) => {
      state.technology = action.payload;
    },
  },
});

export const {
  resetProjectFilters,
  setProjectCategory,
  setProjectSearch,
  setProjectTechnology,
} = projectFiltersSlice.actions;

export default projectFiltersSlice.reducer;

