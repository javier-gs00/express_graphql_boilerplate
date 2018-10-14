import Dog from 'Models/dogs'

export function getActions(req, res, next) {
	const { name } = req.body

	const dog = new Dog(name)

	res.status(200).send(dog.getActions())
}
