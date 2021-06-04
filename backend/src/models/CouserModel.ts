import mongoose from 'mongoose';

const CouserSchema = new mongoose.Schema({
    name: String,
    urlImg: String,
    

});

export const CouserModel = mongoose.model('couser', CouserSchema, 'couser');