import { LessonModel } from "../models/LessonModel"
import { Lessons, ParamsByFind } from '../services/types/Lessons'

export const LessonRepository = {
    async findAll() {
        const totalItems =  await LessonModel.find().count()
        const lessons = await LessonModel.find().sort('name');
        const leesonsAndCount = {totalItems, lessons}
        return leesonsAndCount;
    },
    async findByCourse(paramsByFind: ParamsByFind) {
        const {id, limit, skip} = paramsByFind;
        const totalItems =  await LessonModel.find({courseid :id}).count()
        const lessons = await LessonModel.find({courseid :id}).sort('name').limit(limit).skip(skip);
        const leesonsAndCount = {totalItems, lessons}
        return leesonsAndCount;
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