const router = require('express').Router()

router.use('/group1', require('./group1'))
router.use('/group2', require('./group2'))

module.exports = router
