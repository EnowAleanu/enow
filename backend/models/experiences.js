const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experiencesSchema =new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:false 
    }
}, { timestamps: true })

const Experience = mongoose.model('Experience',experiencesSchema);

module.exports = Experience;