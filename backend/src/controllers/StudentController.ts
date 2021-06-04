import { Request, Response } from "express";
import { StudentService } from "../services/StudentService";

export const StudentController = {
  async findAll(request: Request, response: Response) {
    const { schoolgrade, classroom, aboveAverage } = request.params;

    const students = await StudentService.findAll();
    response.status(200).json(students);
  },

  async findOneStudend(request: Request, response: Response) {
    const { id } = request.params;
    const student = await StudentService.findOneStudend(id);
    response.status(200).json(student);
  },

  async create(request: Request, response: Response) {
    const { name, birdDate, cpf, score, classroom, schoolgrade } = request.body;
    const studentCreate = {
      name,
      birdDate,
      cpf,
      score,
      classroom,
      schoolgrade,
    };
    const studentCreated = await StudentService.create(studentCreate);
    response.status(201).json(studentCreated);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, birdDate, cpf, score, classroom, schoolgrade } = request.body;
    const studentUpdate = {
      name,
      birdDate,
      cpf,
      score,
      classroom,
      schoolgrade,
    };
    const studentUpdated = await StudentService.update(studentUpdate, id);
    response.status(200).json(studentUpdated);
  },

  async switchOff(request: Request, response: Response) {
    const { id } = request.params;
    await StudentService.switchOff(id);
    response.status(204).json("aluno desligado");
  },
};
