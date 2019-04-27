require('dotenv').config()
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import routes from 'Src/routes'

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(helmet())
app.use(function(req, res, next) {
	res.setHeader('X-Content-Type-Options', 'nosniff')
	next()
})
app.use(
	morgan(
		process.env.NODE_ENV !== 'production'
			? 'tiny'
			: ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time ms'
	)
)

app.use('/api', routes)

// error handler
app.use(function(err: any, req: any, res: any, next:any) {
	console.error(err.stack)
	res.status(500).send(err)
})

// 404 hanlder
app.use(function(req, res, next) {
	res.status(404).send("Sorry can't find that!")
})

if (process.env.NODE_ENV !== 'test') {
	app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
}

export default app
