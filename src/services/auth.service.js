import { http } from "./config";

export const authService = {
  signUp: (data) => http.post("/auth/signup", data),
  signIn: (data) => http.post("/auth/signin", data),
};
