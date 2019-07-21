import { getDB } from 'Src/db'
import { Brand } from 'Src/@types'

export const brandModel = {
	async getById(id: string): Promise<Brand> {
		const brands = await getDB('brands')
		const brand = brands.filter((b): boolean => b.id === id)[0]
		return brand
	},
	async getAll(): Promise<Brand[]> {
		const brands = await getDB('brands')
		return brands
	},
}
