import * as graphql from 'graphql'
import brands from 'Src/graphql/brands/queries'
import models from 'Src/graphql/models/queries'

const { GraphQLObjectType, GraphQLSchema } = graphql

const query = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...brands,
		...models,
	},
})

export const schema = new GraphQLSchema({
	query,
})
