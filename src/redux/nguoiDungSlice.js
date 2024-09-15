import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nguoiDungService } from "../services/nguoiDung.service";

export const getValueUserApi = createAsyncThunk(
  "nguoiDung/getValueUserApi",
  async (_, ThunkAPI) => {
    const result = await nguoiDungService.getAllUser();
    return result.data.content;
  }
);

export const updateUser = createAsyncThunk(
  "nguoiDung/updateUser",
  async ({ userId, userData }, ThunkAPI) => {
    const result = await nguoiDungService.updateUser(userId, userData);
    return result.data.content;
  }
);

const initialState = {
  listUsers: [],
  updatingUser: null,
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

    // update user
    builder.addCase(updateUser.fulfilled, (state, action) => {
      console.log(action);
      console.log("Cập nhật người dùng thành công");
      // Cập nhật danh sách người dùng với dữ liệu mới
      state.listUsers = state.listUsers.map((user) => {
        user.id === action.payload.id ? action.payload : user;
      });
      state.updatingUser = action.payload;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      console.log("Đang chờ xử lý cập nhật");
      // console.log(action);
    });
  },
});

export const {} = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
