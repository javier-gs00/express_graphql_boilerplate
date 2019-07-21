import * as graphql from 'graphql'
import { brandType } from 'Src/graphql/brands/brand.type'
import { brandModel } from 'Src/models/brand/brand.model'

const { GraphQLList } = graphql

export const brands = {
	type: new GraphQLList(brandType),
	resolve(): any {
		return brandModel.getAll()
	},
}
