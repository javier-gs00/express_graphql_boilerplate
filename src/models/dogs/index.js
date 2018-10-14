class Dog {
	constructor(name, breed, age) {
		this.name = name || 'Rin Tin Tin'
		this.breed = breed || 'German Sheperd'
		this.age = age || 8
		this.actions = ['sit', 'bark', 'salute', 'stand', 'jump', 'roll', 'crawl']
	}

	salute() {
		return `Woof (${this.name} says hi)`
	}

	performAction(action) {
		if (!this.actions.includes(action)) return `${this.name} can't perform ${action}`

		return `${this.name} will now ${action}`
	}

	getActions() {
		return `Available actions are: ${this.actions.join(', ')}.`
	}
}

export default Dog
