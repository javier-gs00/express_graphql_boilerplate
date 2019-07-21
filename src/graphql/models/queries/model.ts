import * as graphql from 'graphql'
import { modelType } from 'Src/graphql/models/model.type'
import { modelModel } from 'Src/models/model/model.model'
import { Model } from 'Src/@types'

const { GraphQLNonNull, GraphQLID } = graphql

export const model = {
	type: modelType,
	args: { id: { type: new GraphQLNonNull(GraphQLID) } },
	resolve(parent: Model, { id }: { id: string }): any {
		return modelModel.getById(id)
	},
}
