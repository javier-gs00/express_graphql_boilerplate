const router = require('express').Router()

router.get('/', require('./foo'))

module.exports = router
