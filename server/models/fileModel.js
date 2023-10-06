const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    name: String,
    data: Buffer, // Store image data as a buffer
    contentType: String,
})
module.exports = mongoose.model('File', FileSchema);