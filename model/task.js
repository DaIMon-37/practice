import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
        unique: true
    }, 
    description :{
        type: String,
        required : true,
        unique: true
    }, isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt : {
        type : Date,
        default : Date.now
    },user: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
    }
});

export const task = mongoose.model("Task", schema);
