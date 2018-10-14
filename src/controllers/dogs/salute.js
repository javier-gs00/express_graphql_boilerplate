const Dog = require('../../models/dogs')

function dogSalute(req, res, next) {
	const { name } = req.body

	const dog = new Dog(name)

	res.status(200).send(dog.salute())
}

module.exports = dogSalute
