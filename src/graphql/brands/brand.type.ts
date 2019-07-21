import * as graphql from 'graphql'
import { countryType } from 'Src/graphql/countries/country.type'
import { countries } from 'Src/db'

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

export const brandType = new GraphQLObjectType({
	name: 'Brand',
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		country: {
			type: countryType,
			resolve(parent: any): any {
				return countries.find((country): any => country.id === parent.countryId)
			},
		},
	},
})
