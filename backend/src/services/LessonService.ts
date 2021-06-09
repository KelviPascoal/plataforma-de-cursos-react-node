import { LessonRepository } from "../repositories/LessonRepository";
import {LessonsResponse, ParamsByFind} from './types/Lessons'


export const LessonService = {
  async findAll(): Promise<LessonsResponse> {
    const lessons = await LessonRepository.findAll();
    return lessons;
  },

  async findByCourse(paramsByFind: ParamsByFind): Promise<LessonsResponse> {
    const lessons = await LessonRepository.findByCourse(paramsByFind);
    return lessons;
  },

  async findById(id: string) {
    const lesson = await LessonRepository.findById(id);
    return lesson;
  },

  async create(lessonCreate: any) {
    const lessonCreated = await LessonRepository.create(lessonCreate);
    return lessonCreated;
  },

  async update(lessonUpdate: any, id: string) {
    const lessonUpdated = await LessonRepository.update(lessonUpdate, id);
    return lessonUpdated;
  },

  async switchOff( id: string) {
    await LessonRepository.switchOff(id);
  },
};
