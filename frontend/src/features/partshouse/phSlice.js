import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import phService from "./phService";

// Get user partshouse
export const getPH = createAsyncThunk(
  "partshouse/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await phService.getPH(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create new partshouse
export const createPH = createAsyncThunk(
  "partshouse/create",
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await phService.createPH(goalData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete Goal
export const deletePH = createAsyncThunk(
  "partshouse/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await phService.deletePH(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  ph: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const phSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPH.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPH.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ph.push(action.payload);
      })
      .addCase(createPH.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Only when rejected??
      })
      .addCase(getPH.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPH.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ph = action.payload; // GET
      })
      .addCase(getPH.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePH.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePH.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ph = state.ph.filter(
          (goal) => goal._id !== action.payload.id
        );
      })
      .addCase(deletePH.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = phSlice.actions;
export default phSlice.reducer;
