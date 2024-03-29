import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recordService from "./recordService";

// Get user records
export const getRecords = createAsyncThunk(
  "record/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordService.getRecords(token);
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

// Get user records
export const getRecord = createAsyncThunk(
  "record/getOne",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordService.getRecord(id, token);
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

// Get user records
export const updateRecord = createAsyncThunk(
  "record/update",
  async (recordData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordService.updateRecord(recordData, token);
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

// Get user records
export const deleteRecordPagePart = createAsyncThunk(
  "recordPage/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordService.getRecord(id, token);
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

// Create new record
export const createRecord = createAsyncThunk(
  "record/create",
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordService.createRecord(goalData, token);
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
export const deleteRecord = createAsyncThunk(
  "record/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordService.deleteRecord(id, token);
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
  records: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRecord.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRecord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.records.push(action.payload);
      })
      .addCase(createRecord.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Only when rejected??
      })
      .addCase(getRecords.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.records = action.payload; // GET
      })
      .addCase(getRecords.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getRecord.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.records = [action.payload]; // GET
      })
      .addCase(getRecord.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = [action.payload];
      })
      .addCase(updateRecord.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRecord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.records = [action.payload]; // GET
      })
      .addCase(updateRecord.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = [action.payload];
      })
      .addCase(deleteRecord.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.records = state.records.filter(
          (record) => record._id !== action.payload.id
        );
      })
      .addCase(deleteRecord.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = recordSlice.actions;
export default recordSlice.reducer;