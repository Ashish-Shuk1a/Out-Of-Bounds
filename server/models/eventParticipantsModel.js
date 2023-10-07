const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventParticipantsSchema = new Schema({
    event_id: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    participant_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    admin_id: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    response:{
        video_clip:{
            type:String
        },
        answers:[{
            question:{
                type:String
            },
            answer:{
                type:String
            }
        }]
    }
}, {timestamps: true})

module.exports = mongoose.model('EventParticipants', eventParticipantsSchema)