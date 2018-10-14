"use strict";

var Dog = require("../../models/dogs");

function dogPerformAction(req, res, next) {
  var _req$body = req.body,
      name = _req$body.name,
      action = _req$body.action;
  var dog = new Dog(name);
  res.status(200).send(dog.performAction(action));
}

module.exports = dogPerformAction;