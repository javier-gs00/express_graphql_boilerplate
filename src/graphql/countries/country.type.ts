import * as graphql from 'graphql'

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

export const countryType = new GraphQLObjectType({
	name: 'Country',
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		continent: { type: GraphQLString },
	},
})
