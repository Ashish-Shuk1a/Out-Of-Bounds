const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type: String,
        minLenth:10, 
        maxLength:10,
        required: true,
        trim: true,
        unique:true
    },
    email:{
        type:String,
        trim:true,
        unique:true
    },
},{timestamps:true})

module.exports = mongoose.model('Admin',AdminSchema)