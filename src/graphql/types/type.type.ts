import * as graphql from 'graphql'

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

export const typeType = new GraphQLObjectType({
	name: 'Type',
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
	},
})
