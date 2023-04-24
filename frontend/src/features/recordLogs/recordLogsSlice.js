import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recordLogService from "./recordLogsService";

export const getRecordLogs = createAsyncThunk(
  "record_logs/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordLogService.getRecordLogs(token);
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

export const createRecordLog = createAsyncThunk(
  "record_log/create",
  async (recordLogData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordLogService.createRecordLog(recordLogData, token);
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

export const deleteRecordLog = createAsyncThunk(
  "record_log/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await recordLogService.deleteRecordLog(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  logs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const recordLogSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRecordLog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRecordLog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.logs.push(action.payload);
      })
      .addCase(createRecordLog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Only when rejected??
      })
      .addCase(getRecordLogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecordLogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.logs = action.payload; // GET
      })
      .addCase(getRecordLogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteRecordLog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRecordLog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.logs = state.logs.filter((log) => log._id !== action.payload.id);
      })
      .addCase(deleteRecordLog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = recordLogSlice.actions;
export default recordLogSlice.reducer;
