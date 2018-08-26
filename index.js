const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, 'test', () => console.log(`server listening on port ${PORT}`))
