import { Request, Response } from "express";
import { CouseService } from "../services/CourseService";

export const CourserController = {
  async findAll(request: Request, response: Response) {
    const coursers = await CouseService.findAll();
    response.status(200).json(coursers);
  },

  async findOneCourser(request: Request, response: Response) {
    const { id } = request.params;
    const courser = await CouseService.findOneCouser(id);
    response.status(200).json(courser);
  },

  async create(request: Request, response: Response) {
    const { urlImg, name } = request.body;

    const courserCreated = await CouseService.create({ urlImg, name });
    response.status(201).json(courserCreated);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { urlImg, name } = request.body;

    const courserUpdated = await CouseService.update({ urlImg, name }, id);
    response.status(201).json(courserUpdated);
  },

  async switchOff(request: Request, response: Response) {
    const { id } = request.params;
    await CouseService.switchOff(id);
    response.status(204).json("aluno desligado");
  },
};
