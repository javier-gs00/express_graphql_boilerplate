import { getDB } from 'Src/db'
import { Country } from 'Src/@types'

export const countryModel = {
	async getById(id: string): Promise<Country> {
		const contries = await getDB('countries')
		const country = contries.filter((c): boolean => c.id === id)[0]
		return country
	},
}
