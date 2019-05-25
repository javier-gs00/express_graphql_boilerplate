import * as graphql from 'graphql'
import brands from './brands'
import models from './models'

const { GraphQLObjectType } = graphql

export const query = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...brands,
		...models,
	},
})
