import { http } from "./config";

export const congViecService = {
  layCongViecTheoTen: (data) =>
    http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`),

  layMenuCongViec: () => http.get("/cong-viec/lay-menu-loai-cong-viec"),

  layChiTietCongViec: (id) =>
    http.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`),

  layCongViecTheoChiTietLoai: (id) =>
    http.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`),

  layCongViecChiTiet: (id) =>
    http.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`),

  layBinhLuanCongViec: (id) =>
    http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`),

  postBinhLuanCongViec: (data, token) =>
    http.post(`/binh-luan`, data, {
      headers: {
        token: token,
      },
    }),
};
