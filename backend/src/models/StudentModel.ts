import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    name: String,
    birdDate: String,
    cpf: Number,
    score: Array,
    classroom: String,
    schoolgrade: Number,
});

export const StudentModel = mongoose.model('student', StudentSchema, 'student');