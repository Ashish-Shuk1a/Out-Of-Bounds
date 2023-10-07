const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        minLenth: 10,
        maxLength: 10,
        required: true,
        trim: true,
        // unique: true
    },
    about:{
        type:String
    },
    email: {
        type: String,
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
    area_of_interest: [{
        type: String
    }],
    prior_exp: [{
        title: {
            type: String
        },
        work: {
            type: String
        },
        date: {
            type: String
        }
    }],
    image: {
        type: String
    },
    stars: {
        type: Number,
        default: 0
    },
    events: [{
        event_id: {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }, 
        status: {
            type: String,
            default: "pending"
        }
    }],
    petitions:[{
        petition_id:{
            type: Schema.Types.ObjectId,
            ref: 'Petition'
        }
    }],
    notifications:{
        on_num:{
            type:Boolean,
            default:true
        },
        on_email:{
            type:Boolean,
            default:true
        }
    }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)