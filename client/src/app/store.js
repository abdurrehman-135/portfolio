import { configureStore } from "@reduxjs/toolkit";

import { portfolioApi } from "../api/portfolioApi";
import authReducer from "../features/auth/authSlice";
import projectFiltersReducer from "../features/projects/projectFiltersSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    projectFilters: projectFiltersReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portfolioApi.middleware),
});

