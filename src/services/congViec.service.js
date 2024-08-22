import { http } from "./config";

export const congViecService = {
  layCongViecTheoTen: (data) =>
    http.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`),
};
