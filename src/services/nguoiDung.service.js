import { http } from "./config";

export const nguoiDungService = {
  getAllUser: () => http.get("/users"),
  postUser: (data) => http.post("/users", data),
  deleteUser: (id) => http.delete(`/users?id=${id}`),
  uploadAvatar: (token, data) =>
    http.post("/users/upload-avatar", data, {
      headers: {
        token,
      },
    }),
};
