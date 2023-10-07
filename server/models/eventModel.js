const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
    admin_id:{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    scope:{
        type:String,
        required:true
    },
    location:{
        region:{
            type:String
        },
        city:{
            type:String
        },
        state:{
            type:String
        },
        country:{
            type:String
        },
        zip_code:{
            type:String
        }
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
    video:{
        type:String
    },
    open:{
        type:Boolean,
        required:true
    },
    res_req:{
        type:Boolean,
        required:true
    },
    response:{
        clip_req:{
            type:Boolean,
            default:false
        },
        questions:[{
            type:String
        }],
    },
    
},{timestamps:true})

module.exports = mongoose.model('Event',EventSchema)