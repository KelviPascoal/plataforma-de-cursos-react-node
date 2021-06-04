import { StudentModel } from "../models/StudentModel"
import { Student, StudentCreate, StudentUpdate } from "../services/types/Student";

export const StudentRepository = {
    async findAll() {
        const students = await StudentModel.find().sort('name');
        return students;
    },

    async findOneStudent(id: string) {
        const student = await StudentModel.findOne({_id: id});
        return student;
    },

    async create(studentCreate: StudentCreate) {
        const studentCreated = await StudentModel.create(studentCreate);
        return studentCreated;
    },

    async update(studentUpdate: StudentUpdate, id: string) {
        const studentUpdated = await StudentModel.findOneAndUpdate({_id: id}, studentUpdate);
        return studentUpdated;
    },

    async switchOff(id: string) {
        await StudentModel.deleteOne({_id: id});
    }
}