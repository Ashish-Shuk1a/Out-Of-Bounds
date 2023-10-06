const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PetitionSchema = new Schema({
    scope:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    story:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    updates:{
        type:String,
        default:null
    }
},{timestamps:true})

module.exports = mongoose.model('Petition',PetitionSchema)