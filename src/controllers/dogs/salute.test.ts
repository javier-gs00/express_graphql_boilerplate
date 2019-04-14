import request from 'supertest'
import app from '../../'
import '@babel/polyfill'

test('Controller salute', async () => {
	const name = 'Bobby'
	const response = await request(app)
		.post('/api/dogs/salute')
		.send({ name })

	expect(response.status).toBe(200)
	expect(response.text).toBe(`Woof (${name} says hi)`)
})
