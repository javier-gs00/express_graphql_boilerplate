import Dog from 'Src/models/dogs'

export function performAction(req: any, res: any, next: any) {
	const { name, action } = req.body

	const dog = new Dog(name)

	res.status(200).send(dog.performAction(action))
}
