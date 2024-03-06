import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./auth/registerSlice";

export const Store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});
