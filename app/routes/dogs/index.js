const router = require('express').Router()
const bodyParser = require('body-parser')
const dogs = require('../../controllers/dogs')

router.use(bodyParser.json())
router.post('/salute', dogs.salute)
router.post('/perform-action', dogs.performAction)

module.exports = router
