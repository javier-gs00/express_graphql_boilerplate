const Dog = require('../../models/dogs')

function dogPerformAction(req, res, next) {
	const { name, action } = req.body

	const dog = new Dog(name)

	res.status(200).send(dog.performAction(action))
}

module.exports = dogPerformAction
