const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    req_volunteers:{
        type:Number,
        required:true
    },
    curr_volunteers:{
        type:Number,
        default:0
    },
    type:{
        type:String,
        required:true
    },
    start_date:{
        type:String,
        required:true
    },
    end_date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    questions:[{
        question:{
            type:String
        },
        answer:{
            type:String
        }
    }],
},{timestamps:true})

module.exports = mongoose.model('Event',EventSchema)