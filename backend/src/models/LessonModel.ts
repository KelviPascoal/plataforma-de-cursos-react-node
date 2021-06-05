import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
   
});

export const LessonModel = mongoose.model('lesson', LessonSchema, 'lesson');