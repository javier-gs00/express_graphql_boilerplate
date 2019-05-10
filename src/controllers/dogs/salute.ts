import { Request, Response } from 'express'
import Dog from 'Src/models/dogs'

export function salute(req: Request, res: Response): Response {
	const { name } = req.body

	const dog = new Dog(name)

	return res.status(200).send(dog.salute())
}