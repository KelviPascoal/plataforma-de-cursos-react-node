import { Request, Response } from "express";
import { LessonService } from "../services/LessonService";

export const LessonController = {
  async findAll(request: Request, response: Response) {
    const { courseid } = request.query;
    console.log(courseid);
    
    if (courseid) {
      const { limit, skip } = request.query;
      const paramsByFind = {
        id: String(courseid),
        limit: Number(limit),
        skip: Number(skip)
    }
      const lessons = await LessonService.findByCourse(paramsByFind);
      response.status(200).json(lessons);
    }

      const lessons = await LessonService.findAll();
      response.status(200).json(lessons);
  },



  async findOneLesson(request: Request, response: Response) {
    const { id } = request.params;

    const lesson = await LessonService.findById(id);
    response.status(200).json(lesson);
  },

  async create(request: Request, response: Response) {
    const { urlvideo, name, description, courseid } = request.body;

    const lessonCreated = await LessonService.create({
      urlvideo,
      name,
      description,
      courseid,
    });
    response.status(201).json(lessonCreated);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { urlvideo, name, description, courseid } = request.body;

    const lessonUpdated = await LessonService.update(
      {
        urlvideo,
        name,
        description,
        courseid,
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
