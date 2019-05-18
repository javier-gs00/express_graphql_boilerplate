import { Request, Response, NextFunction } from 'express'

export function noSniff(req: Request, res: Response, next: NextFunction): void {
	res.setHeader('X-Content-Type-Options', 'nosniff')
	next()
}
