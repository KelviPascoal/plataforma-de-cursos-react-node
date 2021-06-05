import { LessonModel } from "../models/LessonModel"

export const LessonRepository = {
    async findAll() {
        const lessons = await LessonModel.find().sort('name');
        return lessons;
    },
    async findByCourse(courseid: string) {
        const lessons = await LessonModel.find({courseid :courseid}).sort('name');
        return lessons;
        },

    async findById(id: string) {
        const lesson = await LessonModel.findOne({_id: id});
        return lesson;
    },

    async create(lessonCreate: any) {
        const lessonCreated = await LessonModel.create(lessonCreate);
        return lessonCreated;
    },

    async update(lessonUpdate: any, id: string) {
        const lessonUpdated = await LessonModel.findOneAndUpdate({_id: id}, lessonUpdate);
        return lessonUpdated;
    },

    async switchOff(id: string) {
        await LessonModel.deleteOne({_id: id});
    }
}