const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    area_of_interest:[{
        type:String
    }],
    prior_exp:[{
        title:{
            type:String
        },
        work:{
            type:String
        },
        date:{
            type:String
        }
    }],
    image:{
        type:String
    },
    stars:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports = mongoose.model('User',UserSchema)