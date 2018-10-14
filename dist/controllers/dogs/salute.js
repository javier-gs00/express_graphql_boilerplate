"use strict";

var Dog = require("../../models/dogs");

function dogSalute(req, res, next) {
  var name = req.body.name;
  var dog = new Dog(name);
  res.status(200).send(dog.salute());
}

module.exports = dogSalute;