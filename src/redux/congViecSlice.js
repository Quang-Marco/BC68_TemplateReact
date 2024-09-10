import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { congViecService } from "../services/congViec.service";

export const getListJobs = createAsyncThunk(
  "congViec/getListJobs",
  async (_, ThunkAPI) => {
    const response = await congViecService.layMenuCongViec();
    return response.data.content;
  }
);

const initialState = {
  listJobs: [],
};

const congViecSlice = createSlice({
  name: "congViec",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListJobs.fulfilled, (state, action) => {
      state.listJobs = action.payload;
    });
    builder.addCase(getListJobs.pending, (state, action) => {
      console.log("Đang chờ xử lý API");
    });
    builder.addCase(getListJobs.rejected, (state, action) => {
      console.log("Call API Bị lỗi");
    });
  },
});

export const {} = congViecSlice.actions;

export default congViecSlice.reducer;
