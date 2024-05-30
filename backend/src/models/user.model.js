import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true, 
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },

}, { timestamps: true });


export const User = mongoose.model('User', userSchema);