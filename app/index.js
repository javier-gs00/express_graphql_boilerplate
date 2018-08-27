const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(
	morgan(
		process.env.NODE_ENV !== 'production'
			? 'tiny'
			: ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time ms'
	)
)

app.use('/api', require('./routes'))

// error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500)
	res.json(err)
})

module.exports = app
