import * as graphql from 'graphql'
import { typeType } from 'Src/graphql/types/type.type'
import { brands, types } from 'Src/db'
import { brandType } from 'Src/graphql/brands/brand.type'

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql

export const modelType = new GraphQLObjectType({
	name: 'Model',
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		year: { type: GraphQLInt },
		type: {
			type: typeType,
			resolve(parentValue: any): any {
				return types.find((type): any => type.id === parentValue.typeId)
			},
		},
		brand: {
			type: brandType,
			resolve(parentValue: any): any {
				return brands.find((brand): any => brand.id === parentValue.brandId)
			},
		},
	},
})
