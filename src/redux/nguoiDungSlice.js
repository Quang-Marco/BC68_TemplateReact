import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nguoiDungService } from "../services/nguoiDung.service";

export const getValueUserApi = createAsyncThunk(
  "nguoiDung/getValueUserApi",
  async (_, ThunkAPI) => {
    const result = await nguoiDungService.getAllUser();
    return result.data.content;
  }
);

const initialState = {
  listUsers: [],
};

const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueUserApi.fulfilled, (state, action) => {
      console.log("Call API thành công");
      state.listUsers = action.payload;
    });
    builder.addCase(getValueUserApi.pending, (state, action) => {
      console.log("Đang chờ xử lý API");
    });
    builder.addCase(getValueUserApi.rejected, (state, action) => {
      console.log("Call API Bị lỗi");
    });
  },
});

export const {} = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
