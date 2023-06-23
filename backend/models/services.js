const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesSchema =new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    }
}, { timestamps: true })

const Service = mongoose.model('Service',servicesSchema);

module.exports = Service;