const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PetitionSchema = new Schema({
    admin_id:{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
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
        }
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
    image: {
        data: Buffer, // Store image data as a buffer
        contentType: String,
    },
    updates:{
        type:String,
        default:null
    }
},{timestamps:true})

module.exports = mongoose.model('Petition',PetitionSchema)