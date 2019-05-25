import express, { Router } from 'express'
import graphqlRoutes from './graphql'

const router: Router = express.Router()

router.use('/graphql', graphqlRoutes)

export default router
