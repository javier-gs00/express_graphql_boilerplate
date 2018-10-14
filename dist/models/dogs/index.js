"use strict";

function Dog(name, breed, age, action) {
  this.name = name || 'Rin Tin Tin';
  this.breed = breed || 'German Sheperd';
  this.age = age || 8;
  this.actions = ['sit', 'bark', 'salute', 'stand', 'jump', 'roll', 'crawl'];
}

Dog.prototype.salute = function () {
  return "Woof (".concat(this.name, " says hi)");
};

Dog.prototype.performAction = function (action) {
  if (!this.actions.includes(action)) return "".concat(this.name, " can't perform ").concat(action);
  return "".concat(this.name, " will now ").concat(action);
};

Dog.prototype.getActions = function () {
  return "Available actions are: ".concat(this.actions.join(', '), ".");
};

module.exports = Dog;