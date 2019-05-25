import * as graphql from 'graphql'
import { brandType } from 'Src/graphql/types/brand.type'
import { brands as carBrands } from 'Src/db'

const { GraphQLList } = graphql

export const brands = {
	type: new GraphQLList(brandType),
	resolve(): any {
		return carBrands
	},
}
