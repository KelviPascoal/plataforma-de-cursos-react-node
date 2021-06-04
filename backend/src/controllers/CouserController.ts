import { Request, Response } from "express";
import { CouserService } from "../services/CourserService";

export const CourserController = {
  async findAll(request: Request, response: Response) {
    const coursers = await CouserService.findAll();
    response.status(200).json(coursers);
  },

  async findOneCourser(request: Request, response: Response) {
    const { id } = request.params;
    const courser = await CouserService.findOneCouser(id);
    response.status(200).json(courser);
  },

  async create(request: Request, response: Response) {
    const { urlImg, name } = request.body;

    const courserCreated = await CouserService.create({ urlImg, name });
    response.status(201).json(courserCreated);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { urlImg, name } = request.body;

    const courserUpdated = await CouserService.update({ urlImg, name }, id);
    response.status(201).json(courserUpdated);
  },

  async switchOff(request: Request, response: Response) {
    const { id } = request.params;
    await CouserService.switchOff(id);
    response.status(204).json("aluno desligado");
  },
};
