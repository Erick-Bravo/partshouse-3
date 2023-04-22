import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import feedbackService from "./feedbackService";

// Get user part
export const getParts = createAsyncThunk(
  "feedback/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.getFeedback(token);
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
export const createFeedback = createAsyncThunk(
    "feedback/create",
    async (feedbackData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await feedbackService.createFeedback(feedbackData, token);
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
