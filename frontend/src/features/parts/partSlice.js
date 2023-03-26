import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import partService from "./partService";

// Get user part
export const getParts = createAsyncThunk(
  "part/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await partService.getParts(token);
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

// Create new part
export const createPart = createAsyncThunk(
  "part/create",
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await partService.createPart(goalData, token);
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
export const deletePart = createAsyncThunk(
  "part/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await partService.deletePart(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        console.log(message)
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  parts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const partSlice = createSlice({
  name: "part",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.parts.push(action.payload);
      })
      .addCase(createPart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Only when rejected??
      })
      .addCase(getParts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getParts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.parts = action.payload; // GET
      })
      .addCase(getParts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.parts = state.parts.filter(
          (part) => part._id !== action.payload.id
        );
      })
      .addCase(deletePart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = partSlice.actions;
export default partSlice.reducer;