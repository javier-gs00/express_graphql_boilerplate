function helloWorld(req, res, next) {
  res.status(200).send('Simple Express Boilerplate')
}

module.exports = helloWorld
