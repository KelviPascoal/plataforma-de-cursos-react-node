import { Request, Response } from "express";
import { LessonService } from "../services/LessonService";

export const LessonController = {
  async findAll(request: Request, response: Response) {
    const lessons = await LessonService.findAll();
    response.status(200).json(lessons);
  },

  async findOneLesson(request: Request, response: Response) {
    const { id } = request.params;
    const lesson = await LessonService.findById(id);
    response.status(200).json(lesson);
  },

  async create(request: Request, response: Response) {
    const { urlVideo, name, description, courserId } = request.body;

    const lessonCreated = await LessonService.create({
      urlVideo,
      name,
      description,
      courserId,
    });
    response.status(201).json(lessonCreated);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { urlVideo, name, description, courserId } = request.body;

    const lessonUpdated = await LessonService.update(
      {
        urlVideo,
        name,
        description,
        courserId,
      },
      id
    );
    response.status(201).json(lessonUpdated);
  },

  async switchOff(request: Request, response: Response) {
    const { id } = request.params;
    await LessonService.switchOff(id);
    response.status(204).json("aluno desligado");
  },
};
