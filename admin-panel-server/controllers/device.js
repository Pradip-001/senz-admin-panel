const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const Validator = require('validator')
const isEmpty = require('is-empty')

const Project = require('../models/project')
const User = require('../models/user')
const Device = require('../models/device')

exports.createDevice = function (req, res, next) {

    const newDevice = new Device({
        devicename: req.body.devicename,
        user: req.body.userid,
        project: req.body.projectid
    })

    // User.update(
    //     { _id: req.body.userid },
    //     { $push: { projects: newProject } }
    // ).then(project => res.json(project)).catch(err => console.log(err))
    newDevice.save().then(device => res.json(device)).catch(err => console.log(err))

}

exports.getDevices = function (req, res, next) {
    Device.find({ user: req.body.userid, project: req.body.projectid }).then(devices => {
        // Check if user exists
        if (!devices) {
            return res.status(404).json({ emailnotfound: 'Device not found' })
        }

        else {
            console.log(devices)
            res.json(devices)
        }
    })

}