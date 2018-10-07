const router = require('express').Router()

router.use('/dogs', require('./dogs'))

module.exports = router
