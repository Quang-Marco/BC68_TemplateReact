import { http } from "./config";

export const skillsService = {
  getSkills: () => http.get("/skill"),
};
