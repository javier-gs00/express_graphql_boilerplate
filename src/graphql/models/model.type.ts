import * as graphql from 'graphql'
import { typeType } from 'Src/graphql/types/type.type'
import { brandType } from 'Src/graphql/brands/brand.type'
import { brandModel } from 'Src/models/brand/brand.model'
import { typeModel } from 'Src/models/type/type.model'
import { Model } from 'Src/@types'

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql

export const modelType = new GraphQLObjectType({
	name: 'Model',
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		year: { type: GraphQLInt },
		type: {
			type: typeType,
			resolve(parent: Model): any {
				return typeModel.getById(parent.typeId)
			},
		},
		brand: {
			type: brandType,
			resolve(parent: Model): any {
				return brandModel.getById(parent.brandId)
			},
		},
	},
})
