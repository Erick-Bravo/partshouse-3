import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import phReducer from "../features/partshouse/phSlice";
import recordReducer from "../features/records/recordSlice";
import partsReducer from "../features/parts/partSlice";
import selectedPHReducer from "../app/selectedPH";
import selectedPart from "../app/selectedPart";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    partshouses: phReducer,
    records: recordReducer,
    parts: partsReducer,
    selectedPH: selectedPHReducer,
    selectedPart: selectedPart,
  },
});
