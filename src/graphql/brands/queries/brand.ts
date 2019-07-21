import * as graphql from 'graphql'
import { brandType } from 'Src/graphql/brands/brand.type'
import { brands as carBrands } from 'Src/db'

const { GraphQLNonNull, GraphQLID } = graphql

export const brand = {
	type: brandType,
	args: { id: { type: new GraphQLNonNull(GraphQLID) } },
	resolve(_: any, { id }: any): any {
		return carBrands.find((carBrand): any => carBrand.id === id)
	},
}
