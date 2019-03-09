var express = require('express')

const router = express.Router()

const projectController = require('../../controllers/project')


router.post('/createproject', projectController.createProject)
router.post('/getprojects', projectController.getProjects)

module.exports = router