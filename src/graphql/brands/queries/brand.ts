import * as graphql from 'graphql'
import { brandType } from 'Src/graphql/brands/brand.type'
import { brandModel } from 'Src/models/brand/brand.model'

const { GraphQLNonNull, GraphQLID } = graphql

export const brand = {
	type: brandType,
	args: { id: { type: new GraphQLNonNull(GraphQLID) } },
	resolve(_: any, { id }: any): any {
		return brandModel.getById(id)
	},
}
