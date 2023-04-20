import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  part: {},
};

export const selectedPart = createSlice({
  name: "selectedPart",
  initialState,
  reducers: {
    setSelectedPart: (state, action) => {
      state.part = action.payload;
    },
    resetSelectedPart: (state) => initialState,
  },
});

export const { setSelectedPart, resetSelectedPart } = selectedPart.actions;

export default selectedPart.reducer;
