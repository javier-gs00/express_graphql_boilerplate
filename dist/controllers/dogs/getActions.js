"use strict";

var Dog = require("../../models/dogs");

function dogActions(req, res, next) {
  var name = req.body.name;
  var dog = new Dog(name);
  res.status(200).send(dog.getActions());
}

module.exports = dogActions;