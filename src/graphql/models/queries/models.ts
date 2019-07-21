import * as graphql from 'graphql'
import { modelType } from 'Src/graphql/models/model.type'
import { modelModel } from 'Src/models/model/model.model'

const { GraphQLList } = graphql

export const models = {
	type: new GraphQLList(modelType),
	resolve(): any {
		return modelModel.getAll()
	},
}
