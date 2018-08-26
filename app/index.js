const express = require('express')
const morgan = require('morgan')

const app = express()

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
