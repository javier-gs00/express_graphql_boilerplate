import request from 'supertest'
import app from '../../'
import '@babel/polyfill'

test('Controller salute', async () => {
	const name = 'Bobby'
	const action = 'sit'
	const response = await request(app)
		.post('/api/dogs/actions')
		.send({ name, action })

	expect(response.status).toBe(200)
	expect(response.text).toBe(`${name} will now ${action}`)
})
