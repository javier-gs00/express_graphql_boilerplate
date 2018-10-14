"use strict";

var router = require('express').Router();

router.use('/dogs', require("./dogs"));
module.exports = router;