import {api} from '../api';

interface ParamsByFind {
    id: string;
    pageState: number;
}

export const LessonService = {
    async findAll(paramsByFind: ParamsByFind) {
        const lessons = await api.get("/lessons?courseid=" + paramsByFind.id + "&limit=" + 6 + "&skip=" + paramsByFind.pageState);
        return lessons.data;

    }

}