import { getDB } from 'Src/db'
import { Type } from 'Src/@types'

export const typeModel = {
	async getById(id: string): Promise<Type> {
		const types = await getDB('types')
		const type = types.filter((t): boolean => t.id === id)[0]
		return type
	},
}
