import { api } from "../api";

export const CourseService = {
  async findAll() {
    const courses = await api.get("/coursers");

    return courses.data;
  },
};
