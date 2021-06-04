import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
    name: String,
    urlVideo: String,
    description: String,
    courserId: String,
});

export const LessonModel = mongoose.model('lesson', LessonSchema, 'lesson');