export interface Brand {
	id: string
	name: string
	countryId: string
}

export interface BrandGQL {
	id: string
	name: string
	country: string
}

export interface Model {
	id: string
	name: string
	year: number
	typeId: string
	brandId: string
}

export interface ModelGQL {
	id: string
	name: string
	year: number
	type: string
	brand: string
}

export interface Type {
	id: string
	name: string
}

export interface Country {
	id: string
	name: string
	continent: string
}
