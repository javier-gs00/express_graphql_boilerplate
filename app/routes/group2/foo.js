function foo(req, res, next) {
	try {
		throw 'some dummy error'
	} catch (error) {
		const err = { success: false, error }
		next(err)
	}
}

module.exports = foo
