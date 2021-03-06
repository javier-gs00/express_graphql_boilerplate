import { Country, Type, Brand, Model } from 'Src/@types'

// fake db
interface DB {
	countries: Country[]
	types: Type[]
	brands: Brand[]
	models: Model[]
}

export const countries: Country[] = [
	{
		id: '1',
		name: 'Germany',
		continent: 'Europe',
	},
	{
		id: '2',
		name: 'Japan',
		continent: 'Asia',
	},
	{
		id: '3',
		name: 'England',
		continent: 'Europe',
	},
]

export const types: Type[] = [
	{
		id: '1',
		name: 'Coupe',
	},
	{
		id: '2',
		name: 'Sedan',
	},
	{
		id: '3',
		name: 'SUV',
	},
]

export const brands: Brand[] = [
	{
		id: '1',
		name: 'Porsche',
		countryId: countries[0].id,
	},
	{
		id: '2',
		name: 'Toyota',
		countryId: countries[1].id,
	},
	{
		id: '3',
		name: 'Jaguar',
		countryId: countries[2].id,
	},
]

export const models: Model[] = [
	{
		id: '1',
		name: 'Cayman',
		year: 2018,
		typeId: types[0].id,
		brandId: brands[0].id,
	},
	{
		id: '2',
		name: 'Yaris',
		year: 2017,
		typeId: types[1].id,
		brandId: brands[1].id,
	},
	{
		id: '3',
		name: 'F Pace',
		year: 2019,
		typeId: types[2].id,
		brandId: brands[2].id,
	},
	{
		id: '4',
		name: 'F Type',
		year: 2018,
		typeId: types[0].id,
		brandId: brands[2].id,
	},
]

const delay = (model: string): Promise<void> => {
	return new Promise(
		(resolve): void => {
			setTimeout((): void => {
				console.log(`Fetching ${model}`)
				resolve()
			}, 10)
		},
	)
}

export const db: DB = {
	countries,
	types,
	brands,
	models,
}

export const getDB = async <K extends keyof DB>(model: K): Promise<DB[K]> => {
	await delay(model)
	const result = db[model]
	if (!result) return []
	return result
}
