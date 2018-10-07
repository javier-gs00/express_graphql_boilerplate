const Dog = require('../../models/dogs')

function dogActions(req, res, next) {
	const { name } = req.body

	const dog = new Dog(name)

	res.status(200).send(dog.getActions())
}

module.exports = dogActions
