const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    devices: [{ type: Schema.Types.ObjectId, ref: 'devices' }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('projects', ProjectSchema)
