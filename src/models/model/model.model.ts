import { getDB } from 'Src/db'
import { Model } from 'Src/@types'

export const modelModel = {
	async getById(id: string): Promise<Model> {
		const models = await getDB('models')
		const model = models.filter((m): boolean => m.id === id)[0]
		return model
	},
	async getAll(): Promise<Model[]> {
		const models = await getDB('models')
		return models
	},
}
