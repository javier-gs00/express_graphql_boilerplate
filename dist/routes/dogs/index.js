"use strict";

var router = require('express').Router();

var bodyParser = require('body-parser');

var dogs = require("../../controllers/dogs");

router.use(bodyParser.json());
router.post('/salute', dogs.salute);
router.get('/actions', dogs.getActions);
router.post('/actions', dogs.performAction);
module.exports = router;