var express = require('express')
var router = express.Router()

// API's path
// var storyRoute = require('./api/story')
var usersRoute = require('./api/userapi')
var projectRoute = require('./api/projectapi')
var deviceRoute = require('./api/deviceapi')


// Routes
// -> /api/stories/
// router.use('/api/stories', storyRoute)

// -> /api/users/
router.use('/api/users', usersRoute)
router.use('/api/projects', projectRoute)
router.use('/api/devices', deviceRoute)

module.exports = router