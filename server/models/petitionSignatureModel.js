const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetitionSignatureSchema = new Schema({
    petition_id: {
        type: Schema.Types.ObjectId,
        ref: 'Petition',
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
    commnet: {
        type: String,
        default: null
    },
    
}, {timestamps: true})