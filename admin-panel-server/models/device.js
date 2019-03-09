const mongoose = require('mongoose')

const Schema = mongoose.Schema
const DeviceSchema = new Schema({
    devicename: {
        type: String,
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    project: { type: Schema.Types.ObjectId, ref: 'projects' },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('devices', DeviceSchema)
