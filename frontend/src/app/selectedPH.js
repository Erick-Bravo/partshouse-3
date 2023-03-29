import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: {},
};

export const selectedPH = createSlice({
  name: "selectedPH",
  initialState,
  reducers: {
    setSelectedPH: (state, action) => {
      state.selected = action.payload;
    },
    resetSelectedPH: (state) => initialState,
  },
});

export const { setSelectedPH, resetSelectedPH } = selectedPH.actions;

export default selectedPH.reducer;
