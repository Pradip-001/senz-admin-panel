var express = require('express')

const router = express.Router()

const deviceController = require('../../controllers/device')


router.post('/createdevice', deviceController.createDevice)
router.post('/getdevices', deviceController.getDevices)

module.exports = router