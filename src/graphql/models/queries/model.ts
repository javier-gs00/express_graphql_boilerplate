import * as graphql from 'graphql'
import { modelType } from 'Src/graphql/models/model.type'
import { models as carModels } from 'Src/db'

const { GraphQLNonNull, GraphQLID } = graphql

export const model = {
	type: modelType,
	args: { id: { type: new GraphQLNonNull(GraphQLID) } },
	resolve(parentValue: any, { id }: any): any {
		return carModels.find((carModel): any => carModel.id === id)
	},
}
