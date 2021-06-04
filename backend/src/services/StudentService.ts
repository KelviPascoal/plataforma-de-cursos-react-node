import { StudentRepository } from "../repositories/StudentRepository";
import { Student, StudentCreate, StudentUpdate } from "./types/Student";

export const StudentService = {
  async findAll(): Promise<Student[]> {
    const students = await StudentRepository.findAll();
    return students;
  },

  async findOneStudend(id: string): Promise<Student> {
    const student = await StudentRepository.findOneStudent(id);
    return student;
  },

  async create(studentCreate: StudentCreate): Promise<Student> {
    const studentCreated = await StudentRepository.create(studentCreate);
    return studentCreated;
  },

  async update(studentUpdate: StudentUpdate, id: string) {
    const studentUpdated = await StudentRepository.update(studentUpdate, id);
    return studentUpdated;
  },

  async switchOff(id: string) {
    await StudentRepository.switchOff(id);
  },
};
