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
  listDetailsJobs: [
    {
      id: 1,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design-thin.ff38893.svg",
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626459703/G_D-%20Desktop%20banner.png",
      name: "Graphics & Design",
      content: "Designs to make you stand out.",
    },
    {
      id: 2,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/digital-marketing-thin.68edb44.svg",
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0426b6ab656cedb4697336a530541d50-1688626333573/Digital%20Marketing-%20Desktop%20banner.png",
      name: "Digital Marketing",
      content: "Build your brand. Grow your business.",
    },
    {
      id: 3,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation-thin.fd3699b.svg",
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6de5a002b40043ab739b6382daf94e37-1688626851418/W_T-%20Desktop%20banner.png",
      name: "Writing & Translation",
      content: "Get your words across—in any language.",
    },
    {
      id: 4,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation-thin.9d3f24d.svg",
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c5be9e1ff7a9c16910688aa6b7b5ffee-1688626700100/V_A-%20Desktop%20banner.png",
      name: "Video & Animation",
      content: "Bring your story to life with creative videos.",
    },
    {
      id: 5,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio-thin.43a9801.svg",
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626492933/M_A-%20Desktop%20banner.png",
      name: "Music & Audio",
      content: "Don't miss a beat. Bring your sound to life.",
    },
    {
      id: 1594,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting-thin.d5547ff.svg",
      bgURL:
        "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/5fbfd5a9c4ce12c0f9a81c968c1ea8a4-1706422351810/01%20Header%20desktop%20%282%29.png",
      name: "Consulting",
      content: "Access experts to accelerate your business.",
    },
    {
      id: 1595,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech-thin.56382a2.svg",
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/67119574fcb6178f7b270ef6e50d2ff5-1689143601915/Programming%20_%20Tech-%20desktop.png",
      name: "Programming & Tech",
      content: "You think it. A programmer develops it.",
    },
    {
      id: 1596,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business-thin.885e68e.svg",
      bgURL:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef04c627fc0b8106e68dcf33fb4b4311-1688626107192/Business-%20Desktop%20banner.png",
      name: "Business",
      content: "Take your business to the next level.",
    },
    {
      id: 1597,
      imgURL:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/ai-services-thin.104f389.svg",
      bgURL:
        "https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F3586cc12543444efa04361e4939185c1",
      name: "AI Services",
      content: "Add AI with the help of experts who get it.",
    },
  ],
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
