const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    number:{
        type:Number,
        required:true,
        max:10000000000,
        min:100000000,
        unqiue:true
    }
},{timestamps:true})

module.exports=mongoose.model('Test',testSchema);