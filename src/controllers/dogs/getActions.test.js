import { getActions } from './getActions'
import Dog from 'Models/dogs'

test('Controller getActions', () => {
	const req = { body: { name: 'Bobby' } }
	const res = {
		status: function(code) {
			return {
				send: jest.fn()
			}
		}
	}
	getActions(req, res, {})
	console.log('@@@ res', res.status)
})
