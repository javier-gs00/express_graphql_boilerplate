import graphqlHTTP from 'express-graphql'
import express, { Router } from 'express'
import { schema } from 'Src/graphql'

const router: Router = express.Router()

router.post(
	'/',
	graphqlHTTP({
		schema,
		graphiql: false,
	}),
)
router.get(
	'/',
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
)

export default router
