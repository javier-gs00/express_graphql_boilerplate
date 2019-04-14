'use strict'

module.exports = function(api) {
	api.cache.never()

	return {
		presets: [['@babel/preset-env'], ['@babel/preset-typescript']],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						Controllers: './src/controllers',
						Models: './src/models',
						Routes: './src/routes'
					}
				}
			]
		],
		env: {
			test: {
				presets: [['@babel/preset-env']]
			}
		}
	}
}
