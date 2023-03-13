import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import phReducer from "../features/partshouse/phSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    partshouses: phReducer,
  },
});
