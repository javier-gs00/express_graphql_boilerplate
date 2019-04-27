import Dog from 'Src/models/dogs'

export function getActions(req: any, res: any, next: any) {
	const { name } = req.body

	const dog = new Dog(name)

	res.status(200).send(dog.getActions())
}
