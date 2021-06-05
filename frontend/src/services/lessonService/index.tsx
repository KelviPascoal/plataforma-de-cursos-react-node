import {api} from '../api';

export const LessonService = {
    async findAll(id: string) {
        const lessons = await api.get("/lessons?courseid=" + id);
        return lessons.data;

    }

}