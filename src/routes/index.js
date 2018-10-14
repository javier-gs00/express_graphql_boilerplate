import express from 'express'
import { dogRoutes } from './dogs'

const router = express.Router()

router.use('/dogs', dogRoutes)

export { router as routes }
