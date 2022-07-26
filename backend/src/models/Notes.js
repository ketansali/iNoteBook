const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    tag: {
        type: String,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'users',
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model('notes', notesSchema)