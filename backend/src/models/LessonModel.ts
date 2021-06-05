import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
    name: String,
    urlvideo: String,
    description: String,
    courseid: String,
});

export const LessonModel = mongoose.model('lesson', LessonSchema, 'lesson');