import { api } from "../api";

export const CourserService = {
  async findAll() {
    const coursers = await api.get("/coursers");

    return coursers.data;
  },
};
