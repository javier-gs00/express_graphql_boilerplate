import * as graphql from 'graphql'
import { modelType } from 'Src/graphql/types/model.type'
import { models as carModels } from 'Src/db'

const { GraphQLList } = graphql

export const models = {
	type: new GraphQLList(modelType),
	resolve(): any {
		return carModels
	},
}
