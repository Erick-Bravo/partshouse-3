import { createSlice } from "@reduxjs/toolkit";

export const selectedPH = createSlice({
  name: "selectedPH",
  initialState: {
    selected: {}
  },
  reducers: {
    setSelectedPH: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedPH } = selectedPH.actions;

export default selectedPH.reducer;
